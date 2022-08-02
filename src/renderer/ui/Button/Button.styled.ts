import theme from 'renderer/config/theme';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  size?: keyof typeof sizes;
  variant: keyof typeof variants;
};

const sizes = {
  middle: css`
    height: 3.4rem;
    padding: ${theme.spacing[3]};
  `,
};

const variants = {
  neutral: css`
    background: ${theme.colors.neutral[700]};
    color: ${theme.colors.neutral[500]};
    transition: all ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.white};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: ${theme.borderStyles.sm};
  display: grid;
  place-items: center;
  transition: all ${theme.transitions.fast};

  ${({ size }) => size && sizes[size]};
  ${({ variant }) => variants[variant]}
`;

export const ButtonIcon = styled(Button)`
  width: 3.4rem;
  height: 3.4rem;
  display: grid;
  place-items: center;
  padding: 0;
`;
