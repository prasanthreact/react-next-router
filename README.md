# react-next-router

A **Next.js App Router-like experience for React projects**.  
Brings file-based routing and layout handling to your React app, inspired by Next.js App Router.

[![NPM version](https://img.shields.io/npm/v/react-next-router.svg)](https://www.npmjs.com/package/react-next-router)
[![License](https://img.shields.io/npm/l/react-next-router.svg)](LICENSE)

---

## ✨ Features

- **File-system-based Routing** — Like Next.js App Router
- **Nested Layouts Support**
- **Dynamic Routes with `[param]` syntax**
- **Catch-all Routes with `[...param]` syntax**
- **404 / Error Page Handling**
- **Automatic Route Generation**
- Works with **React Router v6+** under the hood

---

## 🚀 Installation

```bash
npm install react-next-router
```

or with yarn:

```bash
yarn add react-next-router
```

---

## 📦 Usage

Example folder structure:

```
src/
 └── app/
      ├── layout.jsx
      ├── page.jsx
      ├── about/
      │    └── page.jsx
      ├── blog/
      │    ├── [slug]/
      │    │     └── page.jsx
      │    └── layout.jsx
      ├── 404.jsx
      └── error.jsx

```

### 1. Define Pages and Layouts

- `page.jsx`: Acts like Next.js's `page.tsx`
- `layout.jsx`: Acts as the layout wrapper for its child routes
- `404.jsx`: Optional - for Not Found pages
- `error.jsx`: Optional - for Error handling page

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

### 2. Setup in Router

```jsx
import { AppRouter } from "react-next-router";

function App() {
  return (
      <AppRouter />
    </>
  );
}

export default App;
```

---

## ⚙️ Options

You can customize the route glob pattern or error component:

```jsx
<AppRouter router={createBrowserRouter} />
```

| Prop     | Type     | Default               | Description    |
| -------- | -------- | --------------------- | -------------- |
| `router` | React.FC | `createBrowserRouter` | Type of router |

---

## 🧩 Supported Features

| Feature                   | Supported     |
| ------------------------- | ------------- |
| Nested Layouts            | ✅            |
| Dynamic Routes (`[slug]`) | ✅            |
| Catch-All (`[...slug]`)   | ✅            |
| Error / 404 Pages         | ✅            |
| Suspense / Lazy Loading   | 🚧 (Upcoming) |

---

## 📄 Example Repo

[Example CodeSandbox](https://codesandbox.io/p/sandbox/react-next-router-example) _(Coming Soon)_

---

## 🛠️ Built With

- [React Router v6](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- TypeScript

---

## ❗ Limitations / Notes

- Server Components are **not supported** (React-only)
- SSR not supported yet
- Inspired heavily by **Next.js App Router**, but fully client-side

---

## 📃 License

MIT © [prasanth](https://github.com/prasanthreact)

---

## 🤝 Contributing

Feel free to submit issues and PRs!  
**Pull requests are welcome.**
