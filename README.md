### 1장

```javascript
const App = () => {
  const world = "World";
  return React.createElement(
    "div",
    { draggable: true },
    React.createElement("h2", null, "Hello ", world, "!"),
    React.createElement("p", null, "I am a paragraph"),
    React.createElement("input", { type: "text" })
  );
};

render(React.createElement(App, null), document.getElementById("myapp"));
```

위와 같이 생성된 `app.js` 파일을 보면 `app.tsx` 파일과 달리 tsc 가 자동으로 `React.createElement` 를 jsx 가 사용된 위치에 넣는 것을 알 수 있다.  
평소에 tsc 가 이러한 작업까지 처리하는 것을 생각하지 않고 있었는데, 생각보다 많은 일을 하고 있었던 것 같다는 느낌이 든다.

<br>

---

### 2장

모듈화를 추가적으로 진행해보았는데, 프레임워크를 주로 사용하면서 느끼지 않았던 각종 불편함 (빌드, serve...) 을 느낄 수 있었다.  

React 를 구현한 다른 글들을 보니 webpack 에서 babel-loader 을 사용해 JSX 문법을 처리했는데, TypeScript 컴파일러가 JSX 문법을 `"jsx": "react"` 설정을 통해 처리해준다는 것에 다시 감사함을 느낄 수 있었다.  

모듈화를 진행하는데 1시간 좀 넘게 걸려서 괜히 했나 싶었지만, 깔끔하게 정리된 파일들을 보니 뿌듯했다!  