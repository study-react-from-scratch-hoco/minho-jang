import React, { useState } from "@/react";

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
    </div>
  );
};

export default App;