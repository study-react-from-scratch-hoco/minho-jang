import { rerender } from "./render";
import { resourceCache } from "./resource";

const React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") {
      try {
        return tag(props, ...children);
      } catch ({ promise, key }) {
        promise.then((value) => {
          resourceCache[key] = value;
          rerender();
        });

        return {
          tag: "h2",
          props: null,
          children: [`Loading resource: ${key}...`],
        };
      }
    }

    const element = {
      tag,
      props,
      children,
    };

    return element;
  },
};

export default React;
