import { getMyAwesomePic } from "@/src/api/photo";
import React, { useState } from "react";
import { CustomImage, Suspense } from "react-component";

const App = () => {
  const [name, setName] = useState('John Doe');
  const [count, setCount] = useState(0);

  return (
    <div draggable>
      <h2>Hello {name}!</h2>
      <p>I am a paragraph</p>
      <input
        type="text"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <h2> Counter value: {count.toString()}</h2>
      <button onclick={() => setCount(count + 1)}>+1</button>
      <button onclick={() => setCount(count - 1)}>-1</button>
      <h2>Our Photo Album</h2>
      <Suspense
        fallback={<div>Loading image...photo1</div>}
        key={'photo1'}
        task={getMyAwesomePic}
      >
        <CustomImage key={'photo1'} />
      </Suspense>
      <Suspense
        fallback={<div>Loading image...photo2</div>}
        key={'photo2'}
        task={getMyAwesomePic}
      >
        <CustomImage key={'photo2'} />
      </Suspense>
    </div>
  );
};

export default App;