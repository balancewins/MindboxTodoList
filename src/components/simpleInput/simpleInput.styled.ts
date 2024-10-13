import styled from 'styled-components';
import { doc } from '../../assets';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 100%;

  &::placeholder {
    color: lightgrey;
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const DocIcon = styled.img.attrs({ src: doc })`
  width: 16px;
  height: 16px;
`;
