# react-next-router

A fully automatic, **Next.js App Router-style file-based routing solution for React** — without using Next.js.

[![NPM version](https://img.shields.io/npm/v/react-next-router.svg)](https://www.npmjs.com/package/react-next-router)
[![License](https://img.shields.io/npm/l/react-next-router.svg)](LICENSE)

Supports:

- **File-based routing**
- **Nested layouts**
- **Route grouping**
- **Dynamic routes**
- **Error boundary**
- **404 page**

Built for **React Router DOM** + **Vite** — simple, fast, familiar.

---

## ✨ Features

✅ Next.js App Router-like routing in React apps\
✅ Auto-load pages from the `/app` folder\
✅ Support for Layouts via `layout.jsx`\
✅ Route Groups with `(group)` folders\
✅ Dynamic routes with `[slug]`, `[...slug]`, `[[slug]]`\
✅ Error boundaries via `error.jsx`\
✅ 404 Not Found handling with `404.jsx`\
✅ Fully type-safe (TypeScript supported)

---

## 📦 Install

```bash
npm install react-next-router
```

---

## 📂 File Structure Example

```
src/
 └── app/
      ├── layout.jsx          # Root layout
      ├── page.jsx            # Index route ('/')
      ├── about/
      │    └── page.jsx       # '/about'
      ├── blog/
      │    ├── [slug]/
      │    │     └── page.jsx # '/blog/:slug'
      │    └── layout.jsx     # Layout for '/blog/*'
      ├── (admin)/
      │    ├── dashboard/
      │    │      └── page.jsx # '/dashboard'
      │    └── layout.jsx     # Layout for group
      ├── error.jsx          # Error boundary
      └── 404.jsx            # Not Found page
```

---

## 🚀 Usage
Example `src/app/page.jsx`:
```jsx
export default function Home() {
  return <h1>Home Page</h1>;
}
```
Example `src/app/layout.jsx`:
```jsx
export default function RootLayout({ children }) {
  return (
    <div>
      <header>Header Content</header>
      <main><Outlet></main>
    </div>
  );
}
```
Example `src/App.jsx`:

```jsx
import { AppRouter } from "react-next-router";

function App() {
  return (
      <AppRouter />
  );
}
export default App;
```

---

## 🔍 Dynamic Routing

| File                          | URL Pattern              |
| ----------------------------- | ------------------------ |
| `app/page.jsx`                | `/`                      |
| `app/about/page.jsx`          | `/about`                 |
| `app/blog/[slug]/page.jsx`    | `/blog/:slug`            |
| `app/blog/[...slug]/page.jsx` | `/blog/*` (catch-all)    |
| `app/blog/[[slug]]/page.jsx`  | `/blog` (optional param) |

---

## 🏗️ Route Grouping (like Next.js `(group)` folders)

Folders wrapped in parentheses will not affect the URL path:

```
app/
 ├── (auth)/
 │     └── login/page.jsx  # '/login'
 └── (dashboard)/
       └── home/page.jsx   # '/home'
```

---

## 🧩 Layouts

Every folder can contain its own `layout.jsx` which wraps all its subroutes:

```
app/
 ├── layout.jsx        # Root layout
 └── blog/
       ├── layout.jsx  # Blog section layout
       └── [slug]/
             └── page.jsx
```

---

## ❌ 404 Page

Define a `404.jsx` file to catch all unmatched routes:

```
app/
 └── 404.jsx
```

---

## 🛡️ Error Boundaries

Add an `error.jsx` file to handle route-specific errors:

```
app/
 └── error.jsx
```

---

## 📝 License

MIT

---

## 👏 Credits

Inspired by **Next.js App Router** and built with **React Router DOM** + **Vite** ❤️

---

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/react-next-router)
- [GitHub Repo](https://github.com/prasanthreact/react-next-router)

