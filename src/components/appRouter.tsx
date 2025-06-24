/// <reference types="vite/client" />

import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import { NotFoundComponent } from "./notFound";
import { ErrorComponent } from "./error";

type Module = { default: React.FC };
const basePath = "/src/app";

const notFoundRoute = import.meta.glob(`/src/app/404.{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;
const errorRoute = import.meta.glob(`/src/app/error.{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;
const routes = import.meta.glob(`/src/app/**/(page|layout).{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;

const recursiveRoutes = (
  routePath: string[],
  acc: RouteObject[],
  Component: Module
) => {
  let path = routePath[0] === "index" ? "/" : routePath[0];
  path = path === "app" ? "/" : path;
  path = path
    .replace(/\:\.\.\.(\w+)/, ":$1/*")
    .replace(/\[(.*)\]/, "$1/*")
    .replace(/\(.*\)/, "");

  let matchedIndex = acc.findIndex((r: RouteObject) => r.path === path);
  if (matchedIndex === -1) {
    matchedIndex = acc.length;
    acc.push({
      path,
    });
  }

  if (routePath[1] === "layout") {
    acc[matchedIndex]["Component"] = Component.default;
    return;
  }

  if (routePath.length > 1) {
    acc[matchedIndex]["children"] = acc[matchedIndex]?.children || [];
    recursiveRoutes(
      routePath.slice(1),
      acc[matchedIndex].children as RouteObject[],
      Component
    );
  } else {
    if (acc[matchedIndex]?.["children"]) {
      acc[matchedIndex]["children"]?.push({
        index: true,
        Component: Component.default,
      });
    } else {
      acc[matchedIndex]["Component"] = Component.default;
    }
  }
};

const allRoutes = Object.entries(routes).reduce(
  (acc: RouteObject[], [link, Component]) => {
    const routePath = link
      .replace(basePath.replace("app", ""), "")
      .replace(/^\//, "")
      .replace(/\.(js|jsx|ts|tsx)$/, "")
      .replace(/\/page$/, "")
      .replace(/\/index$/, "")
      .replace(/\[(.*)\]/, ":$1")
      .trim()
      .split("/")
      .filter(Boolean);

    recursiveRoutes(routePath, acc, Component);
    return acc;
  },
  []
);

export const AppRouter = ({ router = createBrowserRouter }) => {
  const NotFound =
    Object.values(notFoundRoute)?.[0]?.default ?? NotFoundComponent;
  const ErrorElement =
    Object.values(errorRoute)?.[0]?.default ?? ErrorComponent;
  const catchAllRoute = {
    path: "*",
    Component: NotFound,
    ErrorBoundary: ErrorElement,
  };

  allRoutes.forEach((element: RouteObject) => {
    if (element.path === "/") {
      element.ErrorBoundary = ErrorElement;
      element?.children?.push(catchAllRoute);
    }
  });
  const elements = [...allRoutes, catchAllRoute] satisfies RouteObject[];

  return <RouterProvider router={router(elements)} />;
};

export default AppRouter;
