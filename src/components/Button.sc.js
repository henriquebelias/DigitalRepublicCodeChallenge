import styled from "styled-components";

export const Button = styled.button`
  background-color: #f4901d;
  border: none;
  border-radius: 1em;
  color: white;
  margin-top: 0.75em;
  padding: 0.75em 1.5em;
  min-width: 16.625em;
  transition: all 0.75s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid #f4901d;
    color: orange;
  }
`;
