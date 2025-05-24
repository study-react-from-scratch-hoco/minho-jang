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
