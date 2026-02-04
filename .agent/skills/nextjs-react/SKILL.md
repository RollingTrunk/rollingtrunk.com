---
name: Next.js & React Best Practices
description: Guidelines for scalable, performant, and maintainable applications using Next.js and React.
---

# Next.js & React Best Practices

This skill covers the modern standard for building React applications with the Next.js framework (App Router focus).

## 1. React Fundamentals

- **Composition over Inheritance**: Build complex UIs by combining small, simple components.
- **Hooks**:
  - Rules: Only call at the top level. Only call from React functions.
  - `useMemo` & `useCallback`: Use for referential equality and expensive calculations, but don't over-optimize prematurely.
  - Custom Hooks: Extract logic into `useSomething` functions for reusability.
- **Key Prop**: Always use stable, unique IDs for lists. Never use `index` if the list can change order.

## 2. Next.js App Router Architecture

- **Server Components (RSC)**:
  - *Default* in App Router.
  - Use for: Data fetching, accessing backend resources, keeping sensitive keys on server.
  - Benefit: zero bundle size for the component code.
- **Client Components (`"use client"`)**:
  - Use for: Interactivity (`onClick`, `onChange`), State (`useState`), Effects (`useEffect`).
  - Move them as far down the tree as possible (Leaf nodes).
- **File Structure**:
  - `page.tsx`: Route UI.
  - `layout.tsx`: Shared UI (wraps pages).
  - `loading.tsx`: Suspense fallback.
  - `error.tsx`: Error boundary.

## 3. Data Fetching

- **Server-Side**: Fetch data directly in Server Components using `async/await`.
- **Caching**:
  - `fetch(url, { next: { revalidate: 3600 } })`: ISR (Incremental Static Regeneration).
  - `fetch(url, { cache: 'no-store' })`: Dynamic rendering.
- **Suspense Streaming**: Wrap async components in `<Suspense>` to show UI immediately while data loads.

## 4. Performance & Optimization

- **Images**: Always use the `<Image />` component.
  - Prevents layout shift.
  - Auto-resizing and format optimization.
- **Fonts**: Use `next/font` to self-host Google Fonts (zero layout shift).
- **Metadata**: Use the Metadata API for SEO tags instead of `<Head>`.
  ```typescript
  export const metadata: Metadata = { title: 'My Page' };
  ```
- **Bundle Analysis**: Use `@next/bundle-analyzer` to find heavy dependencies.

## 5. State Management

- **URL State**: The URL is the ultimate global state source of truth. Use search params for filters/pagination.
- **Server State**: Use React Query (TanStack Query) or SWR if fetching extensively on crucial client-side interactions.
- **Global Client State**: Use Zustand or Context API sparingly. Avoid Redux unless absolutely necessary for complex complex state (rare).
