# Project Engineering Instructions

Before making any changes, read and understand:

1. `memory.md` — Project context, decisions, conventions, and technical constraints.
2. `code-quality.md` — Mandatory engineering and code-quality standards.

## Mandatory Rules

- Follow all applicable rules in these documents.
- Treat existing architectural decisions in memory.md as project context.
- Do not contradict established decisions without explaining why.
- Update memory.md when a significant architectural or technical decision changes.
- Keep memory.md concise and factual.
- Never invent project requirements or technical decisions.
- Inspect existing code before proposing modifications.
- Prioritize maintainability, security, reliability, and readability.

## Implementation Workflow

1. Understand the requirement.
2. Inspect the relevant existing implementation.
3. Consult project documentation.
4. Plan the smallest appropriate change.
5. Implement following code-quality.md.
6. Run relevant tests, linting, and production builds.
7. Report changes, validation results, and remaining issues.