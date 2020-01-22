import React from "react";
import useCounter from "../useCounter";
import { Container, Button, Count } from "./CounterStyles";

const Counter = () => {
  const [count, handleIncrement, handleDecrement] = useCounter(0);

  return (
    <Container>
      <Button disabled={!count} onClick={handleDecrement}>
        -
      </Button>
      <Count zero={!count}>{count}</Count>
      <Button onClick={handleIncrement}>+</Button>
    </Container>
  );
};

export default Counter;
