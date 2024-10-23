import { useState, useEffect, FC } from "react";

interface CounterProps {
  step: number;
}

const Counter: FC<CounterProps> = ({ step }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Die aktuelle Zahl ist: ${count}`);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + step)}>Increase</button>
    </>
  );
};

export default Counter;
