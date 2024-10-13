import styled from 'styled-components';

export const Container = styled.div`
  inset: 0;
  margin: 25vh auto auto auto;
  width: 75vw;
  max-width: 750px;
  min-width: 350px;
  background-color: #fff;
  border: 1px solid #ced5de;
  box-shadow:
    0 0 10px 6px rgba(15, 23, 40, 0.04),
    0 4px 8px 0 rgba(15, 23, 40, 0.12),
    0 2px 4px 0 rgba(15, 23, 40, 0.04);
  display: flex;
  flex-direction: column;
  overflow: auto;

  & > div:not(:last-child) {
    border-bottom: 1px solid #ced5de;
  }
`;
