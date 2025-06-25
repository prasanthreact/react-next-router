import * as React from "react";
/**
 * A basic 404 page component which renders a 404 error message.
 * It is used as the default 404 page component.
 *
 * @example
 * <NotFoundComponent />
 */
const NotFoundComponent = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        color: "#333",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "50px", margin: 0 }}>404</h1>
      <p style={{ fontSize: "24px", marginTop: "10px" }}>Page Not Found</p>
    </div>
  );
};

export default NotFoundComponent;
