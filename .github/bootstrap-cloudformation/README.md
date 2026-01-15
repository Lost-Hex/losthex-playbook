# AWS Bootstrap for GitHub Actions

Setup OIDC authentication for GitHub Actions to deploy to AWS without storing credentials.

## Quick Setup

### 1. Create OIDC Provider (One-time per AWS account)

```bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
```

### 2. Deploy IAM Role

```bash
cd .github/bootstrap-cloudformation

# Deploy the role (replace with your GitHub org/repo)
aws cloudformation deploy \
  --template-file GitHubActionsRole.yaml \
  --stack-name losthex-base-github-actions \
  --parameter-overrides GitHubRepo=YOUR-ORG/losthex-base \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1

# Get the role ARN (you'll need this for GitHub)
aws cloudformation describe-stacks \
  --stack-name losthex-base-github-actions \
  --query 'Stacks[0].Outputs[?OutputKey==`GitHubActionsRoleARN`].OutputValue' \
  --output text
```

### 3. Done!

The IAM role ARN is hardcoded in `.github/workflows/deploy.yml`, so no GitHub environment setup is needed.

The workflow will automatically deploy:
- `main` branch → `prod` stage
- `staging` branch → `staging` stage

## Usage

### Deploy to Production
```bash
git push origin main
```

### Deploy to Staging
```bash
git push origin staging
```

### Manual Deployment
```bash
# Local deployment (uses your AWS credentials)
npm run sst:deploy -- --stage your-name-dev
```

## Permissions Included

The IAM role has full access to:
- CloudFormation (stacks)
- S3 (buckets and objects)
- Lambda (functions)
- CloudFront (distributions)
- IAM (roles for Lambda)
- CloudWatch Logs
- SSM Parameter Store
- SQS (queues)
- DynamoDB (tables)

## Troubleshooting

### "User is not authorized to perform: sts:AssumeRoleWithWebIdentity"

**Fix**: Check that:
1. OIDC provider exists: `aws iam list-open-id-connect-providers`
2. GitHubRepo parameter matches your repo exactly (`Lost-Hex/lost-hex-base`)

### Local Testing

```bash
# Test deployment locally first
npm install
npm run sst:deploy -- --stage test

# Then push to GitHub
git push origin staging
```
