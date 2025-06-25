import React, { PropsWithChildren } from "react";
import { OutletProps, Outlet } from "react-router-dom";

/**
 * A special component that wraps a Layout component with an
 * `<Outlet />` so that nested routes can be rendered inside the
 * layout.
 *
 * @example
 * // app/layout.jsx
 * import { LayoutComponent } from "react-next-router";
 *
 * export default function Layout({children}) {
 *   return (
 *     <div>
 *       <h1>My Layout</h1>
 *       <LayoutComponent>
 *         {children}
 *       </LayoutComponent>
 *     </div>
 *   );
 * }
 */
const LayoutComponent = ({
  Component,
}: {
  Component: React.FC<PropsWithChildren<OutletProps>>;
}) => {
  return (
    <Component>
      <Outlet />
    </Component>
  );
};

export default LayoutComponent;
