import React, { FC, PropsWithChildren } from "react";
import { useLoaderData, useNavigation, LoaderFunction } from "react-router-dom";

type PageWithLoaderProps = {
  Component: React.FC<PropsWithChildren<{ data: any }>>;
  LoadingComponent: React.FC;
};
/**
 * A special component that wraps a Page component with a
 * loader. It waits for the data to be fetched and then
 * renders the Page component with the fetched data.
 *
 * @example

 * // app/loader.jsx
 * export const loader: LoaderFunction = async () => {
 *   // fetch data
 *   return data;
 * }
 *
 * // app/page.jsx
 * export default function MyPage({data}) {
 *   return (
 *     <div>
 *       <h2>My Page</h2>
 *       <p>{data.message}</p>
 *     </div>
 *   );
 * }
 *
 * // app/pending.jsx
 * export default function MyLoadingComponent() {
 *   return <div>Loading...</div>;
 * }
 */
const PageWithLoader: FC<PageWithLoaderProps> = ({
  Component,
  LoadingComponent,
}) => {
  const navigation = useNavigation();
  const loaderData: any = useLoaderData();
  return navigation.state === "loading" ? (
    <LoadingComponent />
  ) : (
    <Component data={loaderData} />
  );
};

export default PageWithLoader;
