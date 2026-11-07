# Code Quality Standards

**Technology Stack:** React + JavaScript (ES Modules) + Vite  
**Standard:** Production-Grade Engineering  
**Objective:** Maintainable, scalable, secure, readable, and testable software.

---

## 1. Core Engineering Principles

All code must follow these principles:

1. **Readability over cleverness:** Write code that another developer can understand without additional explanations.
2. **Simplicity over abstraction:** Avoid unnecessary abstractions, design patterns, and premature optimization.
3. **Single Responsibility Principle:** Every component, function, and module should have one clear responsibility.
4. **DRY (Don't Repeat Yourself):** Extract genuinely repeated logic into reusable functions or components. Do not create abstractions for one-off operations without a reason.
5. **Separation of Concerns:** Keep UI, business logic, data access, and application configuration appropriately separated.
6. **Explicit over implicit:** Prefer clear function arguments, return values, and control flow.
7. **Fail safely:** Handle errors intentionally. Never silently swallow unexpected failures.
8. **Maintainability first:** Optimize for developers who will maintain the code six months or several years from now.

## 2. Project Architecture

Organize code by feature and responsibility rather than placing everything into generic folders.

Recommended structure:

```text
src/
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│   └── providers/
│
├── assets/
│
├── components/
│   ├── ui/
│   └── shared/
│
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.js
│   │
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── index.js
│
├── hooks/
├── layouts/
├── lib/
├── services/
├── utils/
├── constants/
├── config/
├── styles/
└── main.jsx

public/
tests/
```

Architecture rules:

- Organize domain-specific functionality inside `features/`.
- Keep reusable, application-wide components inside `components/`.
- Keep shared infrastructure and third-party integrations inside `lib/`.
- Keep API communication outside presentation components.
- Avoid circular dependencies.
- Avoid deeply nested directory structures.
- Do not create empty folders or unnecessary abstraction layers.
- Use feature-level exports where they improve encapsulation.
- Keep dependency direction predictable.

## 3. React Component Standards

### Component design

- Use functional components and React Hooks.
- One component should represent one meaningful UI responsibility.
- Keep components small enough to understand easily.
- Extract complex UI sections into dedicated components.
- Avoid unnecessarily large components containing hundreds of lines.
- Avoid deeply nested conditional rendering.
- Never define components inside other components unless there is a compelling reason.
- Avoid unnecessary prop drilling; introduce context or a state-management solution only when justified.

### Component naming

Use PascalCase for components.

```jsx
function UserProfile() {
  return <section>User Profile</section>;
}

export default UserProfile;
```

Use descriptive names:

```jsx
// Good
function UserAccountSettings() {}

// Avoid
function Settings() {}
function Component1() {}
function Data() {}
```

### Props

- Destructure props in function parameters.
- Use meaningful and consistent prop names.
- Avoid passing entire objects when only a few properties are needed.
- Avoid boolean props that create confusing component behavior.
- Provide defaults where appropriate.
- Validate important component contracts through PropTypes or another suitable validation approach when beneficial.

```jsx
function UserCard({ name, email, isActive = false }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{email}</p>
      {isActive && <span>Active</span>}
    </article>
  );
}
```

### Rendering

- Always provide stable keys when rendering lists.
- Never use array indexes as keys when items can be reordered, inserted, or removed.
- Avoid unnecessary fragments.
- Avoid unnecessary nested elements.
- Keep conditional rendering readable.
- Do not use array indexes as a substitute for actual entity identity.

## 4. JavaScript Standards

### General rules

- Use modern JavaScript (ES2022+ where supported by the target environment).
- Use `const` by default.
- Use `let` only when reassignment is required.
- Avoid `var`.
- Use arrow functions where they improve consistency and readability.
- Prefer template literals for string interpolation.
- Use object and array destructuring where appropriate.
- Use optional chaining and nullish coalescing appropriately.
- Avoid implicit type coercion.
- Avoid unnecessary mutation of shared objects and arrays.
- Prefer immutable state updates in React.
- Avoid deeply nested ternary expressions.
- Avoid excessive one-liners.

### Functions

- Every function should have a clear purpose.
- Use descriptive verb-based function names.
- Keep functions focused.
- Avoid excessive parameters; use an options object when it improves clarity.
- Avoid hidden side effects.
- Return consistent data types.
- Avoid unnecessary callback nesting.

```javascript
// Good
function calculateOrderTotal(items, taxRate) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return subtotal + subtotal * taxRate;
}
```

### Naming conventions

| Element | Convention | Example |
|---|---|---|
| Variables | camelCase | `userProfile` |
| Functions | camelCase | `fetchUserProfile` |
| Components | PascalCase | `UserProfile` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Hooks | camelCase with use prefix | `useAuth` |
| Files (components) | PascalCase | `UserProfile.jsx` |
| Files (utilities) | camelCase | `formatDate.js` |

Avoid meaningless names such as `data`, `temp`, `obj`, `res`, and `val` when a more descriptive name is appropriate.

## 5. React Hooks and State Management

- Follow the Rules of Hooks.
- Never call Hooks conditionally or inside loops.
- Keep state as close as possible to the components that use it.
- Avoid duplicating derived state.
- Prefer calculating derived values instead of synchronizing redundant state.
- Avoid unnecessary `useEffect`.
- Never use `useEffect` to calculate values that can be calculated during rendering.
- Use `useMemo` and `useCallback` only when there is a measurable or meaningful benefit.
- Clean up subscriptions, event listeners, and other external resources.
- Prevent stale closures and race conditions.
- Keep custom Hooks focused on reusable stateful behavior.

### State management hierarchy

Prefer the simplest appropriate solution:

1. Local component state: `useState`.
2. Complex local transitions: `useReducer`.
3. Shared state across a small component tree: Context API.
4. Application-wide complex state: Introduce a dedicated state-management library when justified.

Do not introduce a global state-management library merely because the application has multiple components.

## 6. API and Data Management

- Keep API communication inside dedicated service modules.
- Never mix API implementation details with presentation logic.
- Centralize API configuration.
- Use a consistent response-handling strategy.
- Handle loading, success, empty, and error states.
- Handle network failures and request timeouts.
- Prevent outdated asynchronous requests from updating the UI.
- Validate untrusted external data at appropriate boundaries.
- Never assume an API response always has the expected structure.

Example:

```javascript
// services/userService.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getUser(userId) {
  if (!userId) {
    throw new Error("User ID is required.");
  }

  const response = await fetch(
    `${API_BASE_URL}/users/${encodeURIComponent(userId)}`
  );

  if (!response.ok) {
    throw new Error(`Unable to fetch user: ${response.status}`);
  }

  return response.json();
}
```

## 7. Error Handling

- Never leave unexpected errors unhandled.
- Avoid empty `catch` blocks.
- Do not use exceptions for ordinary control flow.
- Provide meaningful error messages.
- Keep internal debugging information separate from user-facing messages.
- Handle errors at appropriate architectural boundaries.
- Use React Error Boundaries for rendering failures where appropriate.
- Log errors without exposing secrets, tokens, or sensitive information.

Bad:

```javascript
try {
  await saveUser();
} catch (error) {}
```

Good:

```javascript
try {
  await saveUser();
} catch (error) {
  console.error("Failed to save user:", error);
  throw error;
}
```

The error should be logged and propagated or handled by the appropriate caller. Do not handle the same error redundantly at every layer.

## 8. Security Standards

Security is a requirement, not an optional enhancement.

- Never hardcode API keys, credentials, or secrets.
- Use environment variables for environment-specific configuration.
- Remember that `VITE_*` variables are exposed to client-side code and must never contain secrets.
- Never trust user input or API responses.
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary and properly sanitized.
- Prevent XSS vulnerabilities.
- Avoid unsafe URL handling.
- Do not store sensitive authentication credentials in localStorage without an explicit security assessment.
- Use HTTPS for production API communication.
- Do not expose stack traces or internal implementation details to users.
- Keep dependencies updated and review security advisories.
- Apply appropriate authentication and authorization checks on the server. Client-side checks are not security boundaries.

## 9. Performance

- Avoid unnecessary component re-renders.
- Use lazy loading for appropriate route-level components.
- Optimize images and static assets.
- Avoid unnecessarily large dependencies.
- Use code splitting where beneficial.
- Avoid expensive calculations during frequent rendering.
- Use list virtualization for genuinely large datasets.
- Avoid unnecessary network requests.
- Debounce or throttle high-frequency operations when appropriate.
- Measure performance before introducing optimizations.

Never sacrifice readability for speculative performance improvements.

## 10. Accessibility (a11y)

- Use semantic HTML elements.
- Provide accessible names for interactive elements.
- Associate form labels with their inputs.
- Add meaningful alternative text to informative images.
- Ensure keyboard accessibility.
- Maintain visible focus indicators.
- Use ARIA attributes only when native HTML semantics are insufficient.
- Ensure dialogs and menus support appropriate keyboard interactions.
- Maintain sufficient color contrast.
- Never use a clickable `<div>` when a semantic `<button>` or `<a>` is appropriate.

## 11. CSS and Styling

- Keep styling organized and predictable.
- Avoid unnecessary global styles.
- Prefer reusable design tokens for colors, spacing, typography, and other shared values.
- Avoid excessive specificity.
- Avoid `!important` unless a documented exception requires it.
- Use responsive layouts.
- Avoid arbitrary magic numbers when a design token or named constant is more appropriate.
- Keep component styles scoped where the chosen styling approach supports it.
- Maintain visual consistency throughout the application.

## 12. Code Formatting and Linting

Use automated tooling rather than relying on manual formatting.

Recommended tools:

- ESLint: Static analysis and code-quality enforcement.
- Prettier: Consistent formatting.
- eslint-plugin-react-hooks: React Hooks correctness.
- eslint-plugin-jsx-a11y: Accessibility checks.
- eslint-plugin-react: React-specific linting where useful.

Requirements:

- No unexplained ESLint suppressions.
- No unused variables or imports.
- No accidental debugging statements in production.
- No inconsistent formatting.
- No unexplained magic numbers.
- No dead code.
- No commented-out obsolete implementations.

## 13. Testing Standards

Write tests for meaningful application behavior.

Recommended testing stack:

- Vitest: Unit and integration testing.
- React Testing Library: Component behavior testing.
- MSW: API mocking.
- Playwright: End-to-end testing where appropriate.

Testing principles:

- Test behavior, not implementation details.
- Cover critical business logic.
- Test loading, empty, success, and error states.
- Test important user interactions.
- Test boundary conditions.
- Test error handling.
- Avoid brittle tests coupled to internal component structure.
- Do not rely exclusively on snapshot tests.

Critical application functionality must have meaningful automated test coverage.

## 14. Environment and Configuration

- Separate development, testing, and production configurations.
- Keep environment-specific settings outside application logic.
- Validate required configuration at application startup.
- Provide an `.env.example` file containing placeholders, never real credentials.
- Never commit `.env` files containing secrets.
- Avoid hardcoding URLs, configuration values, and environment-specific assumptions throughout the codebase.

## 15. Dependencies

Before introducing a new dependency:

1. Check whether the functionality already exists in the project.
2. Evaluate whether native JavaScript or React can solve the problem.
3. Review the package's maintenance status.
4. Consider bundle size and runtime impact.
5. Review security and licensing implications.
6. Avoid dependencies that introduce disproportionate complexity.

Do not install packages merely for convenience.

## 16. Git and Code Review

- Use descriptive commit messages.
- Keep commits focused.
- Avoid committing generated files unless required.
- Never commit secrets or local development artifacts.
- Keep pull requests focused and reviewable.
- Remove temporary debugging code.
- Verify that linting and tests pass before merging.
- Document non-obvious architectural decisions.

Every change should be understandable and reviewable by another engineer.

## 17. Documentation

- Document public APIs and reusable utilities where necessary.
- Explain non-obvious business rules.
- Document architectural decisions that affect future development.
- Maintain accurate setup and execution instructions.
- Avoid comments that simply repeat what the code already says.
- Keep documentation synchronized with implementation.

## 18. Definition of Done

Code is not considered complete until:

- [ ] It solves the intended requirement.
- [ ] It follows the existing project architecture.
- [ ] It is readable and appropriately modular.
- [ ] It has no unnecessary duplication.
- [ ] It handles expected errors and edge cases.
- [ ] It does not introduce security vulnerabilities.
- [ ] It supports accessibility requirements.
- [ ] It has appropriate tests.
- [ ] ESLint reports no new errors.
- [ ] Formatting is consistent.
- [ ] No debugging statements or dead code remain.
- [ ] No secrets or sensitive information are exposed.
- [ ] Documentation is updated where necessary.
- [ ] Production build succeeds.

---

## 19. Instructions for AI Coding Agents

When working on this repository, follow these rules strictly:

1. Read and understand the existing project architecture before modifying code.
2. Follow `code-quality.md` for every implementation.
3. Do not rewrite working code unnecessarily.
4. Do not introduce architectural changes without a clear technical justification.
5. Do not create unnecessary files, components, hooks, utilities, or abstractions.
6. Reuse existing functionality where appropriate.
7. Preserve existing behavior unless the requirement explicitly changes it.
8. Never fabricate API responses, business requirements, or application behavior.
9. Never silently ignore errors or disable linting rules to make code pass.
10. Prefer well-established engineering practices over shortcuts.
11. Explain important technical trade-offs when they affect maintainability or security.
12. After implementation, run relevant tests, linting, and production build checks.
13. Fix issues introduced by your changes before declaring the task complete.
14. If a requirement is ambiguous and materially affects architecture or behavior, ask for clarification rather than making risky assumptions.

**Final engineering principle:**

Write code as though another engineer will inherit, debug, extend, and maintain it for the next five years. Optimize for correctness, clarity, reliability, and long-term maintainability—not the number of abstractions, lines of code, or patterns used.