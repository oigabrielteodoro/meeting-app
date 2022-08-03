import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import theme from 'renderer/config/theme';

type MenuLinkProps = {
  active?: boolean;
};

export const Container = styled.aside`
  position: fixed;
  top: ${theme.layout.header};
  width: ${theme.layout.sider};
  bottom: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-block: ${theme.spacing[4]};
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[5]};
`;

export const MenuLink = styled(Link)<MenuLinkProps>`
  display: grid;
  place-items: center;
  width: 4.2rem;
  height: 4.2rem;
  color: ${theme.colors.neutral[500]};
  border-radius: ${theme.borderStyles.md};
  transition: all ${theme.transitions.fast};
  outline: 0.2rem solid transparent;
  outline-offset: 0.4rem;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background: ${theme.colors.purple[500]};
    border-radius: ${theme.borderStyles.rounded};
  }

  &:focus {
    outline-color: ${theme.colors.purple[500]};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${theme.colors.white};
      background: ${theme.colors.purple[500]};
      border-radius: ${theme.borderStyles.rounded};
    `}
`;
