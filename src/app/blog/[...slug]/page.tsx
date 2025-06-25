import { useNextParams } from "../../../package/hooks/useParams";

const DynamicRoutePage = () => {
  const params = useNextParams();
  console.log(params);
  return <div>DynamicRoutePage</div>;
};

export default DynamicRoutePage;
