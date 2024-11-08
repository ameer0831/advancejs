import React, { useState } from 'react';

const MultipleStateExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John Doe');
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>Name: {name}</h1>
      <button onClick={() => setName('Jane Smith')}>Change Name</button>

      <h1>Status: {isActive ? 'Active' : 'Inactive'}</h1>
      <button onClick={() => setIsActive(!isActive)}>Toggle Status</button>
    </div>
  );
};

export default MultipleStateExample;
