import React, { Component, useEffect } from "react";
const Hook = () => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
};
export default Hook;
