import { createResource } from "react";

export const Suspense = (props, children) => {
  console.log('Suspense', props, children);
  const { fallback, key, task } = props;
  createResource(task, key, fallback);
  return children;
};