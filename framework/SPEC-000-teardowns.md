# SPEC-000: LostHex Discovery Specs

| | |
|---|---|
| **Author** | Vice Šimunov |
| **Date** | January 2026 |

---

## What's a Teardown?

A teardown is a structured analysis of an existing system. It's a spec with **rebuild assessments**—for each technical decision, we ask: "Would we make this decision again?"

We write teardowns when:

- Taking over a codebase from another team
- Evaluating a potential project
- Documenting a system we need to integrate with

## Why Teardowns?

Discovery specs (Google Docs) helped us sell projects but didn't help us build them. Teardowns bridge that gap—they're technical reconnaissance that feeds directly into scope specs and SOWs.

**Target:** 4 hours (excluding SME interviews)

## Structure

Teardowns follow spec structure with two additions:

| Section | Purpose |
|---------|---------|
| **Spec Summary** | Intro, inputs, goal, executive summary |
| **Business Context** | Problem, solution, big idea, competitors |
| **Business Decisions** | With **BUSINESS ASSESSMENT** |
| **System Model** | Black-box: inputs, outputs, controls, core functions |
| **Whiteboard Diagram** | High-level architecture |
| **Data Structures** | ER diagram, CUD ops, queries, persistence |
| **Topics** | One per core function, with ITDs |
| **ITDs** | With **REBUILD ASSESSMENT** |

### Rebuild Assessment

The key differentiator. For each technical decision:

> **Would we make this decision again?** Yes / No
>
> If No: Was it right at the time? What would we do today?

Many "No" answers signal significant technical debt.

### Business Assessment

For business decisions:

> "This decision remains valid" OR "We should reconsider this decision"

Assessed from CEO/Owner perspective.

## Inputs

What you need before starting a teardown:

### Required

| Input | What It Is | Committed? |
|-------|-----------|------------|
| **SME Interview** | 30-60 min call | Link to recording |
| **Transcript** | Written record of interview | ✅ Yes (`inputs/sme-interview.md`) |
| **Codebase** | Full repo cloned locally | ❌ No (gitignored) |

### Recommended

| Input | What It Is | How to Get It |
|-------|-----------|---------------|
| **AWS/Infra Access** | Read-only console access | IAM user or SSO |
| **Database Access** | Query access for schema inspection | Credentials from client |
| **Existing Docs** | Architecture diagrams, READMEs, wikis | Client shares |

**Minimum viable teardown:** SME interview + codebase. Everything else improves depth.

### Repo Structure

Each client gets their own repo (from this template):

```text
acme-discovery/              # Created from losthex-playbook template
├── README.md                # Client-facing landing page
├── TEARDOWN.md              # The teardown (main document)
├── inputs/
│   ├── sme-interview.md     # Transcript (committed)
│   └── codebase/            # Client repo (gitignored)
└── framework/               # Internal reference (not in GitBook nav)
```

**We gitignore the codebase** — clone the client repo into `inputs/codebase/`. Cursor reads it during analysis, but we don't commit it (too big, potentially sensitive). Reference the commit SHA in your teardown for reproducibility.

**GitBook shows:** README + TEARDOWN only. Framework is internal.

## Process

1. **Gather inputs** — At minimum: SME interview + codebase access
2. **Model the system** — Black-box (inputs → core functions → outputs)
3. **Diagram** — Whiteboard + ER diagrams (Mermaid → Excalidraw)
4. **Document decisions** — ITDs with rebuild assessments
5. **Write executive summary** — 3-5 actionable insights
6. **Submit for review** — PR, iterate, merge

## Origin

Adapted from DevFactory's teardown methodology. DevFactory used teardowns for acquisition due diligence across hundreds of products. We simplified for operational efficiency—same rigor, 4-hour SLA.

---

## What's a Scope Spec?

A scope spec defines **what we're building, who's building it, and when**. It follows a teardown—using findings to shape the work.

Teardown → Scope → SOW → Build

### Structure

| Section | Purpose |
|---------|---------|
| **Executive Summary** | What, outcome, timeline |
| **Objectives** | Success criteria |
| **Scope** | In/out, assumptions |
| **Resource Allocation** | Team, hours, duration |
| **Timeline** | Milestones, Gantt |
| **Deliverables** | What we hand over |
| **Risks** | What could go wrong |
| **Dependencies** | What we need from client |
| **Sign-off** | Both parties agree |

### Key Sections

**Resource Allocation** — Who, how much, how long:

| Role | Person | Allocation | Duration |
|------|--------|------------|----------|
| Tech Lead | Name | 20 hrs/week | 4 weeks |
| Developer | Name | 30 hrs/week | 4 weeks |

**Timeline** — Milestones with dates and deliverables.

**From Teardown** — Explicitly connect scope to teardown findings.

---

## Templates

- [Teardown Template](../TEARDOWN.md)
- [Scope Template](../SCOPE.md)
