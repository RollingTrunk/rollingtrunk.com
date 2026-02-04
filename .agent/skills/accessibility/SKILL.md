---
name: Web Accessibility (A11y)
description: Best practices for building inclusive, accessible web applications (WCAG 2.2).
---

# Web Accessibility (A11y)

Building accessible web applications ensures that everyone, including people with disabilities, can use your product. This skill covers the essentials of WCAG 2.2 AA compliance.

## 1. Semantic HTML
The foundation of accessibility is proper HTML.
- **Landmarks**: Use `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>` to define page structure.
- **Headings**: Use `<h1>` through `<h6>` in a logical order. Never skip levels (e.g., `<h1>` to `<h3>`).
- **Buttons vs. Links**:
  - Use `<button>` for actions (submit, toggle, open modal).
  - Use `<a>` (`<Link>`) for navigation (changing URL).

## 2. Visual Accessibility
- **Color Contrast**: Ensure text has a contrast ratio of at least 4.5:1 against its background (3:1 for large text).
- **Focus Indicators**: NEVER remove the default focus ring (`outline: none`) without replacing it with a visible custom style.
- **Text Resizing**: Ensure the site remains usable when zoomed to 200%. Avoid fixed height containers for text.

## 3. Keyboard Navigation
Users must be able to navigate and interact with everything using only a keyboard.
- **Tab Order**: DOM order should match visual order.
- **Interactables**: All interactive elements must be focusable (tabbable).
- **Skip Links**: Include a "Skip to content" link at the top of the page.

## 4. ARIA (Accessible Rich Internet Applications)
Use ARIA **only** when HTML alone is insufficient.
- **Labels**: Use `aria-label` or `aria-labelledby` for elements without visible text (e.g., icon buttons).
- **State**: Use `aria-expanded`, `aria-selected`, `aria-hidden` to communicate dynamic state.
- **Roles**: Use `role="dialog"`, `role="alert"`, etc., for custom components.

## 5. Testing Checklist
Before shipping, verify:
1. [ ] Can you tab through the entire page in a logical order?
2. [ ] Is the current focus always clearly visible?
3. [ ] Do all images have `alt` text (or `role="presentation"` if decorative)?
4. [ ] Does the screen reader announce dynamic content updates (using `aria-live`)?
5. [ ] Run an automated audit (Lighthouse or axe DevTools).
