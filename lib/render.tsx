import App from "@/src";
import React from "../lib/react";
import { appState } from "./state";

export const render = (element, container) => {
  let domElement;

  if (typeof element === "string") {
    domElement = document.createTextNode(element);
    container.appendChild(domElement);
    return;
  }

  domElement = document.createElement(element.tag);

  let elementProps = element.props ? Object.keys(element.props) : null;
  if (elementProps && elementProps.length > 0) {
    elementProps.forEach((prop) => domElement[prop] = element.props[prop]);
  }

  if (element.children && element.children.length > 0) {
    element.children.forEach((node) => render(node, domElement));
  }

  container.appendChild(domElement);
};

export const rerender = (id = 'app') => {
  console.log("Rerendering the application...");
  const root = document.getElementById(id);
  root.innerHTML = "";
  appState.index = 0;
  render(<App />, document.getElementById(id));
};
