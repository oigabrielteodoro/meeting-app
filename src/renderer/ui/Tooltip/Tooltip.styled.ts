import styled, { css } from 'styled-components';

import theme from 'renderer/config/theme';

import type { TooltipProps } from './Tooltip';

type Props = Required<Pick<TooltipProps, 'position' | 'alwaysOnTop'>>;

type WrapperProps = {
  shouldMountVisible?: boolean;
};

const modifiers = {
  top: css`
    top: 0;
    left: 50%;
    transform: translate(-50%, calc(-100% - 1.4rem));
  `,
  bottom: css`
    left: 50%;
    bottom: 0;
    transform: translate(-50%, calc(100% + 1.4rem));
  `,
  right: css`
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 1.6rem), -50%);
  `,
  left: css`
    top: 50%;
    left: 0;
    transform: translate(calc(-100% - 1.6rem), -50%);
  `,
};

const arrowModifiers = {
  top: css`
    bottom: -0.8rem;
    top: -1.9rem;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    border-top-color: transparent;
    border-right-color: transparent;
  `,
  bottom: css`
    bottom: -1.9rem;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    border-bottom-color: transparent;
    border-left-color: transparent;
  `,
  right: css`
    top: 50%;
    left: calc(100% + 1.2rem);
    transform: translateY(-50%) rotate(-45deg);
    border-bottom-color: transparent;
    border-right-color: transparent;
  `,
  left: css`
    top: 50%;
    right: calc(100% + 1.2rem);
    transform: translateY(-50%) rotate(-45deg);
    border-top-color: transparent;
    border-left-color: transparent;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ shouldMountVisible }) =>
    !shouldMountVisible &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

export const Container = styled.span<Props>`
  position: absolute;
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.disclaimer};
  font-weight: ${theme.font.weights.medium};
  background: ${theme.colors.neutral[900]};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.borderStyles.sm};
  transition: ${theme.transitions.fast};
  white-space: nowrap;
  text-align: center;
  z-index: ${({ alwaysOnTop }) =>
    theme.layers[alwaysOnTop ? 'alwaysOnTop' : 'base']};

  ${({ position }) => modifiers[position]};
`;

export const Indicator = styled.div<Props>`
  position: absolute;
  background: ${theme.colors.neutral[900]};
  height: 1rem;
  width: 1rem;
  z-index: ${({ alwaysOnTop }) =>
    theme.layers[alwaysOnTop ? 'alwaysOnTop' : 'base']};

  ${({ position }) => arrowModifiers[position]};
`;

export const BaseElement = styled.div`
  position: relative;

  &:hover ${Wrapper} {
    opacity: 1;
    visibility: visible;
  }
`;
