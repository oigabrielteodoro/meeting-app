import { ReactNode } from 'react';
import * as S from './Button.styled';

type Props = {
  children: ReactNode;
} & Partial<S.ButtonProps>;

export default function Button({
  children,
  variant = 'neutral',
  size = 'middle',
}: Props) {
  return (
    <S.Button variant={variant} size={size}>
      {children}
    </S.Button>
  );
}

Button.Icon = function ButtonIcon({
  children,
  variant = 'neutral',
}: Omit<Props, 'size'>) {
  return <S.ButtonIcon variant={variant}>{children}</S.ButtonIcon>;
};
