import { RouteObject } from "react-router-dom";

export const replaceGroupPaths = (routes: RouteObject[]) => {
  return routes.map((route) => {
    if (route.path && /^\(.+\)$/.test(route.path)) {
      route.path = "";
    }
    if (route.children) {
      route.children = replaceGroupPaths(route.children);
    }

    return route;
  });
};
