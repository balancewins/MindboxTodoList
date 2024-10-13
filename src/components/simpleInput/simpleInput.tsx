import { FC, InputHTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import { DocIcon, StyledInput, Wrapper } from './simpleInput.styled';

export const SimpleInput: FC<InputHTMLAttributes<any>> = observer(({ ...props }) => {
  return (
    <Wrapper>
      <DocIcon />
      <StyledInput {...props} />
    </Wrapper>
  );
});
