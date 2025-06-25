import React from "react";
import { useParams as useReactDomParams } from "react-router-dom";

//overwrite the useParams for catchall params route
export const useNextParams = () => {
  const params = useReactDomParams();
  let updatedParams: { [key: string]: any } = params;

  if (Object.values(params).length > 1) {
    const paramsCollect = Object.values(params).flatMap((param) => {
      return param?.split("/");
    });
    const findSlug = Object.keys(params).find((key) => key !== "*");
    if (findSlug) {
      updatedParams = { [findSlug]: paramsCollect };
    }
  }
  return updatedParams;
};
