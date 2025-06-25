import { useNextParams } from "../../../package/hooks/useParams";

const DynamicRoutePage = () => {
  const params = useNextParams();
  console.log(params);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <h1>Dynamic Route Page</h1>
      <p>This page displays the dynamic route parameters:</p>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default DynamicRoutePage;
