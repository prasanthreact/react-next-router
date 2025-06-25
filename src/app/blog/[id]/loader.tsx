const FetchLoad = async ({ params }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`,
  );
  const json = await data.json();
  console.log(json);
  return json;
};

export default FetchLoad;
