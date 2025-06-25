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
- **Loader support for data fetching**

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
✅ Loader support for data fetching `loader.jsx`\
✅ Fully type-safe (TypeScript supported)

---
# Live Demo

Try it on StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-next-router-example?file=src%2Fmain.jsx)

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
      │    │     ├── page.jsx   # '/blog/:slug'
      │    │     └── loader.jsx  # Loader for data fetching
      │    └── layout.jsx     # Layout for '/blog/*'
      ├── (admin)/
      │    ├── dashboard/
      │    │      └── page.jsx # '/dashboard'
      │    └── layout.jsx     # Layout for group
      ├── error.jsx           # Error boundary
      ├── 404.jsx             # Not Found page
      ├── pending.jsx         # Pending component (renders while loading)
```


> You can `loader.jsx` alongside any `page.jsx` to fetch data before rendering the page.  
> Add a `app/pending.jsx` file to show a loading UI while the loader is running.

---

## 🚀 Usage

Example `src/app/page.jsx`:
```jsx
export default function Home({ data }) {
  return <h1>Home Page {data && <span>{data.message}</span>}</h1>;
}
```

Example `src/app/layout.jsx`:
```jsx
export default function RootLayout({ children }) {
  return (
    <div>
      <header>Header Content</header>
      <main>{children}</main>
    </div>
  );
}
```

Example `src/app/loader.jsx`:
```js
// This loader runs before the sibling page.jsx and its return value is passed as the 'data' prop
export default async function loader() {
  // You can fetch from any API or return any data
  const res = await fetch('https://api.example.com/message');
  const data = await res.json();
  return { message: data.message };
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
| `app/blog/[slug]/loader.jsx`   | Data loader for `/blog/:slug` |
| `app/pending.jsx`             | Loading UI while data is fetched |


## 🧪 useAppRouter Hook
You can now use the useAppRouter() hook to get a JSON structure of all matched routes. This is useful when you want to inspect or manipulate the route config manually — for example, inside a custom RouterProvider or createBrowserRouter setup.

```jsx
import { useAppRouter } from "react-next-router";

const MyComponent = () => {
  const router = useAppRouter();
  console.log(router);
  return <div>Check the console for the matched routes!</div>;
};
```

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

## 🛠️ Loaders (Data Fetching)

Add a `loader.jsx` file alongside any `page.jsx` to fetch data before rendering the page. The returned value will be passed as the `data` prop to the sibling `page.jsx` component.

Example:
```
app/
 └── about/
       ├── page.jsx
       └── loader.jsx
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

