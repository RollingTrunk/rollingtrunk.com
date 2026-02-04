---
name: Frontend Engineering Best Practices
description: Comprehensive guide to modern frontend engineering, covering architecture, accessibility, performance, and responsive design.
---

# Frontend Engineering Best Practices

This skill outlines the core principles and practices for building robust, scalable, and high-quality frontend applications.

## 1. Architecture & Structure

### Component Design
- **Single Responsibility**: Each component should do one thing well.
- **Atomic Design Principles**:
  - **Atoms**: Basic building blocks (buttons, inputs, icons).
  - **Molecules**: Groups of atoms (search bar, form field with label).
  - **Organisms**: Complex sections (header, product card).
  - **Templates**: Page layouts.
  - **Pages**: Actual routes/views.
- **Container vs. Presentational**: Separate logic (data fetching, state) from UI (rendering). *Note: Hooks have largely replaced this pattern, but the concept of separating concerns remains.*

### CSS Architecture
- **Methodology**: Use a consistent naming convention. BEM (Block Element Modifier) is standard for vanilla CSS/SCSS.
  ```css
  .card {} /* Block */
  .card__title {} /* Element */
  .card--featured {} /* Modifier */
  ```
- **Scoped Styling**: Prefer CSS Modules or CSS-in-JS (Styled Components, Emotion) to avoid global namespace pollution in component-based apps.
- **Tokens**: Use design tokens for colors, spacing, typography, and breakpoints.

## 2. Accessibility (a11y)

**Goal**: Making the web usable by everyone, regardless of disability.

- **Semantic HTML**: Use proper tags (`<nav>`, `<main>`, `<article>`, `<button>`) instead of generic `<div>`s.
- **Keyboard Navigation**: Ensure all interactive elements are focusable and usable via keyboard.
  - Use `tabindex="0"` for custom interactive elements.
  - Never set `outline: none` on focus without providing an alternative style.
- **ARIA**: Use ARIA attributes (`aria-label`, `aria-expanded`) only when semantic HTML isn't enough.
- **Color Contrast**: Ensure sufficient contrast (WCAG AA standard) between text and background.
- **Images**: Always provide `alt` text for informative images; use `alt=""` for decorative ones.

## 3. Performance Optimization

**Core Web Vitals**:
- **LCP (Largest Contentful Paint)**: Loading performance. Optimize images, split code.
- **FID (First Input Delay) / INP (Interaction to Next Paint)**: Interactivity. Minimize main thread work.
- **CLS (Cumulative Layout Shift)**: Visual stability. Reserve space for images/embeds.

**Techniques**:
- **Code Splitting**: Lazy load routes and heavy components (`React.lazy`).
- **Image Optimization**: Use explicit width/height, modern formats (WebP, AVIF), and lazy loading (`loading="lazy"`).
- **Tree Shaking**: Remove unused code during build.
- **Caching**: Leverage browser caching and CDNs.

## 4. Responsive Design

- **Mobile First**: Design for small screens first, then scale up.
- **Fluid Layouts**: Use relative units (`%`, `rem`, `vw`) instead of fixed pixels (`px`).
- **Media Queries**: Use breakpoints for layout changes, not specific devices.
  ```css
  @media (min-width: 768px) { ... }
  ```

## 5. Modern JavaScript

- **ES6+ Features**: Use arrow functions, destructuring, template literals, and async/await.
- **TypeScript**: Strictly type your code to catch errors early.
  - Avoid `any`.
  - Use Interfaces for objects and API responses.
  - Use Generics for reusable functions/components.
- **Functional Programming**: Prefer pure functions and immutability.
