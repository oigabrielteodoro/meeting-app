import styled, { css } from 'styled-components';

import theme from 'renderer/config/theme';
import { ButtonIcon } from 'renderer/ui/Button/Button.styled';

type GridButtonProps = {
  active?: boolean;
};

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing[4]};
  background: ${theme.colors.neutral[900]};
`;

export const GridButton = styled(ButtonIcon)<GridButtonProps>`
  ${({ active }) =>
    active &&
    css`
      color: ${theme.colors.white};
    `}
`;
