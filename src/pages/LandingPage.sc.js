import styled from 'styled-components';

export const WallSelectionGroup = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;

  max-width: 80em;
`;

export const MiddleSection = styled.div`
  display: flex;
  margin: 1em 0 ;
  flex-direction: column;

  h4 {
    margin: 0 1em;
  }

  button {
    align-self: center;
    width: 30%;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 2em auto;

  max-width: 60em;
`;

export const IndividualCanDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  height: 12em;
`;

export const MultipleCansDiv = styled.div`
  & > p {
    margin-bottom: 1em;
  }
`;
