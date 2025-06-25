import { LoaderFunctionArgs } from "react-router-dom";
const FetchLoad = async ({ params }: LoaderFunctionArgs) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const json = await data.json();
  console.log(json);
  return json;
};

export default FetchLoad;
