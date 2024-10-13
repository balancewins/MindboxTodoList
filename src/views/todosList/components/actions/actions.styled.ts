import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
`;

export const Line = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const ButtonsGroup = styled(Line)`
  margin: 0 auto;
`;
