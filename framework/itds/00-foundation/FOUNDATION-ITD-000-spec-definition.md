# FOUNDATION-ITD-000: What is a Spec?

## CONTEXT

**ITDs are the basic building blocks of technical documentation.** An ITD (Important Technical Decision) documents a real decision that is technical in nature and hard to change. These are not trivial choices—they're decisions with lasting consequences that teams need to get right. ITDs are standalone, reusable, and authors can write them quickly—especially with AI assistance.

**LostHex History:** We've used various documentation approaches—detailed templates, teardowns, scope specs, build specs. These served us well but required significant time investment (4-8 hours per spec). With 26 team members (70% part-time) and plans to 4x expand, we need documentation that scales without sacrificing quality.

**The AI Opportunity:** AI coding assistants (Cursor, Claude) can generate first drafts from templates and context, dramatically reducing authoring time. Structured templates + AI assistance = better docs in half the time.

**Current Need:** With rapid growth and client expectations for professional documentation, we need a systematic framework that supports both standalone decisions (ITDs) and project narratives (Specs).

## PROBLEM

What document types does the framework need for client projects and internal initiatives?

## OPTIONS CONSIDERED

1. ITDs only: Just document individual technical decisions
2. ✅ **Specs + ITDs**: Project-level documentation (Specs) that provides narrative, plus standalone decision records (ITDs)

## REASONING

*Option 1 (ITDs only):* Lightweight and fast—document decisions as you make them. However, individual ITDs document decisions in isolation—they answer "what did we decide?" but not "what are we building?" or "why?" Clients need the full story. New team members (especially part-time) struggle to understand how decisions connect. No clear traceability from business requirements to technical implementation.

*Option 2 (Specs + ITDs):* Adds structure but provides the narrative that ties ITDs together into a coherent project story. Specs connect client requirements to technical implementation, giving teams (and clients) shared understanding of what we're building. The framework dramatically reduces spec creation time through templates and AI assistance—what used to take 8 hours now takes 4 hours with better quality.

## IMPLICATIONS

- Projects that need structured documentation get a Spec (client engagements, complex internal initiatives)
- Spec is a project-level document (distinct from individual ITDs)
- Teams can create Specs at any stage—discovery, planning, or during implementation
- Separate decisions needed: Documentation platform, ITD/Spec relationship, data structure handling
