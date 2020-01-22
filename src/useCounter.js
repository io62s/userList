import { useState } from "react";

export default initialState => {
  const [count, setCount] = useState(initialState);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return [count, handleIncrement, handleDecrement];
};
