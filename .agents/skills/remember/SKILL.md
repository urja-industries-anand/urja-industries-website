---
name: remember
description: Maintain persistent project knowledge. Use when important architectural decisions, technical constraints, implementation discoveries, recurring bugs, or project conventions need to be remembered, retrieved, or updated.
---

# Remember Skill

You are responsible for maintaining accurate, useful, and concise project memory.

## Memory Location

Use `memory.md` in the repository root as the primary project memory.

## When to Remember

Record:
- Important architectural decisions.
- Technology and dependency choices.
- Business logic and technical constraints.
- Non-obvious implementation details.
- Recurring bugs and verified solutions.
- Important changes to project structure.
- Lessons that prevent repeating previous mistakes.

## When NOT to Remember

Do not record:
- Every individual code change.
- Temporary debugging output.
- Unverified assumptions.
- Information already documented elsewhere.
- Trivial implementation details.

## Before Implementing

1. Read `memory.md`.
2. Understand existing architectural decisions.
3. Check whether the requested change conflicts with existing decisions.
4. Preserve established conventions unless there is a justified reason to change them.

## Updating Memory

When updating memory.md:

1. Inspect the existing document first.
2. Preserve accurate historical decisions.
3. Update outdated information rather than accumulating contradictions.
4. Record the decision and its technical rationale.
5. Keep entries concise and factual.
6. Never invent missing information.

## Memory Structure

Maintain these sections:

- Project Overview
- Technology Stack
- Architecture Decisions
- Coding Conventions
- Important Technical Decisions
- Current Implementation Status
- Known Issues and Technical Debt
- Lessons Learned

## Retrieval

When asked about previous technical decisions or project history, consult memory.md before answering.

Do not guess when information is unavailable. Clearly identify missing information.