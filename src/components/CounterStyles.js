import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  font-family: "Montserrat", sans-serif;
`;

const Button = styled.button`
  outline: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  padding: 0.5rem;
  background: ${props => (props.disabled ? "#dedede" : "#fff")};
  font-size: 1.3rem;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const Count = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: ${props => (props.zero ? "red" : "green")};
`;

export { Container, Button, Count };
