import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1); 
    }, 1000);

    return () => {
      clearInterval(id); 
    };
  }, []); 

  return (
    <div>
      <h2>Exercise 2 - useEffect + Cleanup</h2>
      <p>Counter: {count}</p>
    </div>
  );
}

export default Timer;