/// <reference types="vite/client" />

import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import ErrorComponent from "./error";
import LayoutComponent from "./layout";
import NotFoundComponent from "./notFound";
import PageWithLoader from "./pageWithLoader";

type Module = { default: React.FC };
const basePath = "/src/app";

//importing routes from app
const notFoundRoute = import.meta.glob(`/src/app/404.{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;
const errorRoute = import.meta.glob(`/src/app/error.{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;
const loadingRoute = import.meta.glob(`/src/app/loading.{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;
const routes = import.meta.glob(`/src/app/**/(page|layout|loader).{jsx,tsx}`, {
  eager: true,
}) as Record<string, Module>;

//other routes
const NotFound =
  Object.values(notFoundRoute)?.[0]?.default ?? NotFoundComponent;
const ErrorElement = Object.values(errorRoute)?.[0]?.default ?? ErrorComponent;
const LoadingComponent =
  Object.values(loadingRoute)?.[0]?.default ?? React.Fragment;

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
    acc[matchedIndex]["Component"] = () => (
      <LayoutComponent Component={Component.default} />
    );
    return;
  }

  if (routePath[1] === "loader") {
    acc[matchedIndex]["loader"] = Component.default;
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
    const RouterComponent = () => (
      <PageWithLoader
        Component={Component.default}
        LoadingComponent={LoadingComponent}
      />
    );
    if (acc[matchedIndex]?.["children"]) {
      acc[matchedIndex]["children"]?.push({
        index: true,
        Component: RouterComponent,
      });
    } else {
      acc[matchedIndex]["Component"] = RouterComponent;
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

const catchAllRoute = {
  path: "*",
  Component: NotFound,
  ErrorBoundary: ErrorElement,
};

export const useAppRouter = () => {
  allRoutes.forEach((element: RouteObject) => {
    if (element.path === "/") {
      element.ErrorBoundary = ErrorElement;
      element?.children?.push(catchAllRoute);
    }
  });
  return allRoutes satisfies RouteObject[];
};

export const AppRouter = ({ router = createBrowserRouter }) => {
  const elements = useAppRouter();
  return <RouterProvider router={router(elements)} />;
};

export default AppRouter;
