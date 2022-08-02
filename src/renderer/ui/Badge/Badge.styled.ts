import theme from 'renderer/config/theme';
import styled, { css } from 'styled-components';

export type BadgeProps = {
  variant: keyof typeof variants;
};

const variants = {
  neutral: css`
    color: ${theme.colors.white};
    background: ${theme.colors.neutral[700]};
  `,
};

export const Container = styled.div<BadgeProps>`
  border-radius: ${theme.borderStyles.sm};
  height: 3.2rem;
  padding-inline: ${theme.spacing[2]};
  display: flex;
  align-items: center;
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weights.semiBold};

  ${({ variant }) => variants[variant]};
`;

export const Icon = styled.div`
  margin-right: ${theme.spacing[1]};
`;
