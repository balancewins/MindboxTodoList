import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid lightgrey;

  :last-child {
    border-bottom: none;
  }
`;

export const StyledSpan = styled.span<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;
