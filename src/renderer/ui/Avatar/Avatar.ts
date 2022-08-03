import theme from 'renderer/config/theme';
import styled, { css } from 'styled-components';

type AvatarProps = {
  size: keyof typeof sizes;
  highlight?: boolean;
};

const sizes = {
  large: css`
    width: 10rem;
    height: 10rem;
  `,
};

export default styled.img<AvatarProps>`
  border-radius: ${theme.borderStyles.rounded};
  object-fit: cover;
  transition: all ${theme.transitions.fast};

  ${({ highlight }) =>
    highlight &&
    css`
      outline: 0.2rem solid ${theme.colors.purple[500]};
      outline-offset: 0.4rem;
    `}

  ${({ size }) => sizes[size]};
`;
