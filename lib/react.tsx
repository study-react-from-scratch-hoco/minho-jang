const React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === 'function') {
      return tag(props, ...children);
    }

    const element = {
      tag,
      props,
      children
    };

    return element;
  },
};

export default React;