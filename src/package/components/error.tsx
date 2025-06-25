import * as React from "react";

/**
 * A basic error component which renders a 500 error message.
 * It is used as the default error boundary fallback component.
 *
 * @example
 * <ErrorComponent />
 */
const ErrorComponent = () => {
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
      <h1 style={{ fontSize: "50px", margin: 0 }}>500</h1>
      <p style={{ fontSize: "24px", marginTop: "10px" }}>
        Something went wrong
      </p>
    </div>
  );
};

export default ErrorComponent;
