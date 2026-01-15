# Custom Markdownlint Rules

Custom linting rules for ITD and Data Structure documents.

## Rules

### ITD Rules

#### `itd-single-selected-option.js`

Enforces that exactly one option in the OPTIONS CONSIDERED section has both:

- ✅ checkmark
- **Bold formatting**

**Example (correct):**

```markdown
## OPTIONS CONSIDERED

1. ✅ **Selected Option**: Description
2. Alternative 1: Description
3. Alternative 2: Description
```

**Errors caught:**

- No option selected
- Multiple options selected
- Option has ✅ but no bold
- Option has bold but no ✅

## Usage

These rules are automatically loaded by markdownlint when running:

```bash
npm run lint:markdown
```

## Adding New Rules

Create a new `.js` file in this directory following the markdownlint custom rule format:

```javascript
module.exports = {
  names: ["rule-name"],
  description: "Rule description",
  tags: ["tag1", "tag2"],
  function: function rule(params, onError) {
    // Rule logic
  }
};
```

Then update `.markdownlint.json` to reference the rules directory.
