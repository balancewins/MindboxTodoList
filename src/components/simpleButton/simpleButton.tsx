import { FC, ButtonHTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import { StyledButton } from './simpleButton.styled';

export const SimpleButton: FC<ButtonHTMLAttributes<any>> = observer(
  ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
  },
);
