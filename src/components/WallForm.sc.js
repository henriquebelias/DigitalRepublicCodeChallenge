import styled from 'styled-components';

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;

  form {
    border: 1px solid #f4901d;
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    padding: 0.25em;
    width: 300px;

    input[type=number] {
      font-size: 0.9rem;
      padding: 0.25em 0;
      margin: 0.25em 0;
      width: 3em;
    }

    input[type=checkbox] {
      margin-left: 0.5em;
    }
  }

  span {
    border: 1px solid red;
    background-color: red;
    color: white;
    margin-top: 1.5em;
    padding: 1em 0.5em;
    text-align: center;
  }
`;
