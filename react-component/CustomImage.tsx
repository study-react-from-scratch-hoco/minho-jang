import React from "react";
import { resourceCache } from "react/resource";

export const CustomImage = ({ key }) => {
  return (
    <img src={resourceCache[key]} alt={key} />
  );
};