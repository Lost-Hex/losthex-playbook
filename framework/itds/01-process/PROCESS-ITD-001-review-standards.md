# PROCESS-ITD-001: Review Standards

## CONTEXT

Documentation goes through PR review before merging. Without clear standards, reviews become subjective—some reviewers nitpick formatting, others miss logical gaps.

## PROBLEM

What quality bar should reviewers enforce for specs and ITDs?

## OPTIONS CONSIDERED

1. **Informal review** - Reviewer discretion, no checklist
2. ✅ **Defined quality bar** - Specific criteria for approval
3. **Formal sign-off** - Multiple reviewers, staged approval

## REASONING

*Option 1 (Informal):* Inconsistent quality. Some docs slip through with weak reasoning.

*Option 2 (Defined bar):* Clear expectations for both authors and reviewers. Faster reviews because criteria are objective.

*Option 3 (Formal sign-off):* Overkill for a small agency. Adds latency without proportional benefit.

## IMPLICATIONS

**For Specs:**

- Black-box model clearly defines boundaries
- Decisions have reasoning (not just statements)
- Diagrams are readable and accurate

**For ITDs:**

- Author frames problem as a neutral question
- Author presents options on equal footing (no leading)
- Reasoning addresses each option
- Implications describe realistic consequences

**Review mechanics:**

- Every comment should result in a doc change
- No debates in comments—update the doc instead
- Approve when work meets quality bar
