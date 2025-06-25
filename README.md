## 1장

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

## 2장  

헨리님이 onchange 관련해서 실제 React 의 `onChange` 는 사용자의 입력에 따라 동적으로 동작하는데, 우리가 사용하는 `onchange` 는 Enter 를 누르거나 focus 에서 벗어나야지만 동작하는 것에 대해서 말을 하셨을 때, 혼자 했을 때는 *간단한 프로젝트니깐...* 하고 넘기게 되었던 점이 다시 눈에 들어왔고, 관련해서 찾아보며 React 공식 문서에 있었던 Diffing 에 대해서 다시 생각해보는 계기가 되었다. 

또한 평소에 잘 모르고 있던 HTML 이벤트 핸들러와 DOM 이벤트 리스너의 차이를 자세히 알게 되었다.

```html
<input type="text" onchange="handleChange()" />
```
- HTML 요소의 속성
- DOM 프로퍼티로 할당됨
- 하나의 핸들러만 등록됨
- 이벤트 발생 시점: **focus 를 잃거나 Enter 키를 눌렀을 때**

```js
element.addEventListener('change', handleChange);
element.addEventListener('input', handleInput);
```
- 여러 개의 핸들러 등록 가능
- 이벤트 타입에 따라 발생 시점이 다름
  
> DOM 이벤트 리스너의 `input` 는 타이핑할 때마다 발생하며, HTML 이벤트의 `onchange` 는 focus 를 잃을 때만 발생하게 된다. 

```jsx
<input
  type="text"
  value={name}
  oninput={(e) => setName(e.target.value)}
  // onchange={(e) => setName(e.target.value)}
/>
```
- `onchange` 가 아닌 `oninput` 을 사용하면 사용자의 입력에 따라 동적으로 실행하는 것이 가능하지만, 현재 구현된 rerender 에서는 `root.innerHTML = ''` 를 통해 전체를 초기화하고 다시 렌더링하기 때문에 focus 정보가 사라져 입력마다 끊기는 현상이 발생한다. 


나중에 [React 톺아보기](https://goidle.github.io/) 에 나와있는 React Reconciler 에 대한 글들을 자세히 읽어보고 싶다. (제가 추천하긴 했지만 대충 보고 넘어간 글이였기 때문에..ㅎㅎㅎ)

<br>

## 3장

React 코어 팀은 개발자가 React 의 저수준 구현을 생각하지 않는 것을 권장한다는 말을 저자가 인용했는데, 사실 프레임워크를 사용할 때 저수준 구현을 생각하면서 개발해야 한다면, 추상화가 잘못된 프레임워크일 확률이 매우매우 높기 때문에 당연한 말이라고 생각한다.  

그렇기 때문에 저자도 실제 React 의 저수준 고급 DOM 처리 등을 구현하는 것이 아닌, `root.innerHTML = ''` 과 같은 로직만 구현한 것이라고 예상이 된다.  

<br>

## 4장

SSR 에 대해서 깊게 알아갈 수 있었다. 평소에는 간단히 서버에서 미리 HTML 로 렌더링하는 것이라고 생각했지만, 그 속에서 어떤 과정이 일어나며 어떤 문제들이 있는지 알 수 있었다.  

프레임워크를 사용하면서 css import 문제에 대해서 생각해본적이 없었는데, `typescript-plugin-css-modules` 를 사용하는지는 모르겠지만 관련 작업을 프레임워크에서 대신 처리해준다는 것이 인상깊었다.  

`global.d.ts` 파일을 보면서 next.js 의 `next-env.d.ts` 가 떠올랐다. 거기서 reference 로 참조하는 파일에서 이미지나 css 등 자료 타입도 정의해줬던 것이 생각났기 때문이다.  

hydration 에 대해서 아래와 같게만 생각하고 있었다.     
hydration = 상호작용이 가능하도록 만들어줌  

SSR 을 간단히 구현해보면서 hydration 은 단순히 상호작용이 가능하도록 만들어주는 것이 아닌, SSR 로 생성된 HTML 에 관련 이벤트 리스너와 상태, 기타 동적 기능을 활성화하는 것임을 알 수 있었다.  

추가로 React Query 와 같은 라이브러리에서 나오는 hydration 과 dehydration 에 대해서 다시 생각해 볼 수 있었다.
- dehydration: 데이터를 HTML 에 붙임
- hydration(데이터 관점): 데이터를 클라이언트에서 상태로 만듬

<br>

| 구분                    | 설명                             |
| --------------------- | ------------------------------ |
| **Hydration (UI)**    | 정적인 HTML을 동적으로 만드는 과정 (이벤트 연결) |
| **Dehydration (데이터)** | 서버에서 직렬화된 데이터를 클라이언트로 보내는 과정   |
| **Hydration (데이터)**   | 클라이언트에서 이 데이터를 복원해서 재사용        |

<br>

추가적으로 hydration 을 알아보는 중에 다음과 같은 hydration 구분을 알 수 있었다.

### Partial Hydration

페이지 전체를 hydration 하지 않고 **필요한 부분만 hydration 하는 방식**  

> Next.js 예시
```js
import dynamic from 'next/dynamic';
const InteractiveWidget = dynamic(() => import('./Widget'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>정적인 콘텐츠</h1>
      <InteractiveWidget />
    </div>
  );
}

```
- 서버 측 렌더링을 비활성화해 클라이언트에서 컴포넌트를 동적으로 로딩함
- Next.js 에서 서버 컴포넌트 안에 클라이언트 컴포넌트를 사용하면 **Partial Hydration 이 자동 적용됨**

<br>

### Progressive Hydration

hydration 을 **한 번에 전체 적용하지 않고**, 시간 차를 두고 순차적으로 적용  
중요한 UI 부터 hydration 하고 나머지는 유후 시간에 수행  

<br>

### Islands Architecture

페이지 전체가 정적인 HTML 로 렌더링되고, "인터렉티브 해야하는 부분만" 독립된 섬(Island) 로 존재함.  

Next.js 는 React 기반의 서버/클라이언트 컴포넌트 분리를 하였지만, 전체는 여전히 React 앱 구조로 페이지 전체가 JS 번들에 일부 포함됨. 그러므로 Island Architecture 가 아님.  

Astro 는 페이지 전체를 HTML 로 내리고 특정 DOM 영역만 hydration 을 진행함. 그러므로 React, Svelte, Vue, SolidJS... 와 같은 수많은 프레임워크를 지원할 수 있으며, 전부를 섞어서 사용할 수도 있음.

```html
<!-- SSR된 HTML -->
<h1>Welcome to my blog</h1>
<div id="astro-interactive-123">0</div>

<!-- Astro가 삽입한 hydration 스크립트 -->
<script type="module">
  import hydrate from '/_astro/InteractiveCounter.js';
  hydrate(document.getElementById('astro-interactive-123'));
</script>

```

<br>

**Next.js**  

```tsx
import Counter from './Counter';

export default function Page() {
  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  );
}
```
- Counter 에서 `use client` 사용
- 페이지 전체가 JS 번들에 일부 포함됨

<br>

**Astro**

```astro
---
import Counter from '../components/Counter.jsx';
---

<h1>Hello</h1>
<Counter client:visible />
```
- 페이지 전체가 HTML 로 내려감
- Counter 컴포넌트만 JS 로 lazy-load 되어 별도로 hydration