# [CATEGORY]-ITD-XXX: [Decision Title]

| | |
|---|---|
| **Author** | [Name] |
| **Date** | [Month Year] |

---

> **Note:** Author and Date are optional—omit them when the ITD is part of a Spec (the Spec has its own metadata).
>
> **Category Examples**: FOUNDATION, PROCESS, AUTHORING, SECURITY, DATA, INFRA
>
> **Naming**: Use uppercase categories with lowercase descriptors (e.g., `SECURITY-ITD-001-encryption-strategy.md`)

## CONTEXT

Background information and situational context. Why is this decision needed?

- What problem are we trying to solve?
- What's the current state?
- What constraints do we have?

## PROBLEM

Frame as a clear, answerable question:

- "How should we implement authentication across multiple client types?"
- "Which database should we use for high-volume event storage?"
- "What framework should we use for building our web application?"

## OPTIONS CONSIDERED

List all options you evaluated. Mark the selected option with ✅ and bold:

1. ✅ **[Selected Option]**: Brief description of this approach
2. [Alternative Option 1]: Brief description of this approach
3. [Alternative Option 2]: Brief description of this approach

## REASONING

Explain why the selected option was chosen AND why each alternative was rejected.

*Option 1 (Selected):* [Why this was chosen - specific technical reasons, evidence, how it fits context]

*Option 2:* [Why rejected - specific limitations or trade-offs that weren't acceptable]

*Option 3:* [Why rejected - specific limitations or trade-offs that weren't acceptable]

## IMPLICATIONS

- [Actionable consequence 1 - what must be done]
- [Actionable consequence 2 - what changes are required]
- [Constraint or requirement]
- [Separate decisions needed downstream]

## IMPLEMENTATION NOTES (Optional)

[Technical details, configuration examples, or additional context that helps with implementation. Use this section for content that doesn't fit elsewhere but is useful for engineers implementing the decision.]

---

## Tips for Writing Good ITDs

### AI-Assisted Writing Guidelines

**AI/LLM Usage Encouraged**: Use AI to help structure reasoning, generate examples, and improve clarity. Authors remain fully accountable for all technical content and accuracy.

### CONTEXT Section

- Explain the "why now" - what triggered this decision?
- Include relevant constraints (timeline, budget, team size)
- Keep it brief - detailed analysis goes in REASONING

### PROBLEM Section

- Frame as a specific, answerable question
- Avoid solution hints in the problem statement
- Make it clear what decision needs to be made

### OPTIONS CONSIDERED Section

- List ALL options you seriously evaluated (not just 2)
- Mark the selected option with ✅ and **bold** (e.g., `1. ✅ **Option Name**: description`)
- Give each option a brief, neutral description
- Present options on equal footing (no bias in descriptions)

### REASONING Section

- This is the heart of the ITD - take your time here
- Explain why the winner was chosen with specific technical reasons
- Address each rejected alternative explicitly
- Include evidence when possible (benchmarks, metrics, references)
- **Evidence accessibility**: Copy relevant excerpts from sources and link the original — not all readers have access to every system
- Explain why this fits your specific context
- Be honest about trade-offs

### IMPLICATIONS Section

- Focus on actionable items
- Include costs, risks, and dependencies
- Note downstream decisions that need to be made
- Mention training/documentation needs

### Inline References

- Link to related ITDs and documents **inline where mentioned** (not in a separate References section)
- Example: "This builds on [FOUNDATION-ITD-002](path/to/file.md) which established..."
- External links (articles, benchmarks) should also be inline where relevant

### Rendering Check

- **Preview in GitBook** after merge to verify rendering
- Run `npm run lint:markdown` locally to catch structure issues before PR
