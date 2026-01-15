# SPEC-001: Scope Specs

| | |
|---|---|
| **Author** | Vice Šimunov |
| **Date** | January 2026 |

---

## What's a Scope Spec?

A scope spec defines **what we're building, who's building it, and when**. It follows a teardown and feeds into a Statement of Work (SOW).

```text
Teardown → Scope → SOW → Build
```

## Why Scope Specs?

Teardowns tell us what exists. Scope specs translate findings into actionable plans with resources and timelines. Without a scope spec, estimates are guesses and teams don't know what "done" looks like.

## Structure

| Section | Purpose |
|---------|---------|
| **Executive Summary** | What, outcome, timeline |
| **Objectives** | Qualitative success criteria |
| **Success Metrics** | Quantifiable targets |
| **Requirements** | Functional (FR) + Non-functional (NFR) |
| **Scope** | In/out, assumptions |
| **Resource Allocation** | Team, hours, duration |
| **Timeline** | Milestones, Gantt |
| **Deliverables** | What we hand over |
| **Risks** | What could go wrong |
| **Dependencies** | What we need from client |
| **Sign-off** | Both parties agree |

## Key Sections

### Success Metrics

Quantifiable targets that define "done":

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Performance | API < 200ms p95 | Load testing |
| Reliability | 99.9% uptime | Monitoring |
| Adoption | 80% users migrated | Analytics |

### Requirements

**Functional (FR)** — What the system must do:

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1 | System shall authenticate via OAuth | Must |
| FR-2 | System shall process 100 req/sec | Must |
| FR-3 | System shall support dark mode | Should |

**Non-Functional (NFR)** — Quality attributes:

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-1 | Performance | < 200ms response |
| NFR-2 | Scalability | 10k concurrent users |
| NFR-3 | Security | SOC 2 compliant |

### Resource Allocation

Who's doing what, how much:

| Role | Person | Allocation | Duration |
|------|--------|------------|----------|
| Tech Lead | Name | 20 hrs/week | 4 weeks |
| Developer | Name | 30 hrs/week | 4 weeks |

**Total:** 200 hours over 4 weeks with 2 people.

### From Teardown

Explicitly connect scope to teardown findings:

- **Finding:** Auth system uses deprecated JWT library
- **Scope impact:** Include auth refactor in Phase 1, add 20 hours

## Process

1. **Complete teardown first** — Can't scope what you don't understand
2. **Define success metrics** — How do we know we're done?
3. **List requirements** — What specifically needs to work?
4. **Allocate resources** — Who, how much, how long?
5. **Build timeline** — Milestones with dates
6. **Identify risks** — What could derail us?
7. **Get sign-off** — Both parties agree before starting

## Template

See [Scope Template](../SCOPE.md).
