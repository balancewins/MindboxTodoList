import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  gap: 4px;
  width: fit-content;
  cursor: pointer;
  border: 1px solid lightgrey;
  background-color: white;
  transition: background-color 0.1s;

  &:hover {
    background-color: lightgrey;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;
