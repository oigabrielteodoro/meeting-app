import theme from 'renderer/config/theme';
import styled, { css } from 'styled-components';

type Props = {
  type?: keyof typeof types;
  size?: keyof typeof theme.font.sizes;
  weight?: keyof typeof theme.font.weights;
};

type TitleProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & Props;

const types = {
  default: css`
    color: ${theme.colors.white};
  `,
  neutral: css`
    color: ${theme.colors.neutral[500]};
  `,
};

export const Text = styled.span<Props>`
  font-size: ${({ size = 'small' }) => theme.font.sizes[size]};
  font-weight: ${({ weight = 'regular' }) => theme.font.weights[weight]};
  ${({ type = 'default' }) => types[type]}
`;

export const Strong = styled.strong<Props>`
  font-size: ${({ size = 'paragraph' }) => theme.font.sizes[size]};
  line-height: ${({ size = 'paragraph' }) => theme.font.lineHeights[size]};
  font-weight: ${({ weight = 'bold' }) => theme.font.weights[weight]};
  font-weight: 500;
  ${({ type = 'default' }) => types[type]}
`;

export const Paragraph = styled.p<Props>`
  font-size: ${({ size = 'paragraph' }) => theme.font.sizes[size]};
  font-weight: ${({ weight = 'regular' }) => theme.font.weights[weight]};
  ${({ type = 'default' }) => types[type]}
`;

export const Title = styled.h1<TitleProps>`
  font-size: ${({ size = 'title' }) => theme.font.sizes[size]};
  font-weight: ${({ weight = 'bold' }) => theme.font.weights[weight]};
  ${({ type = 'default' }) => types[type]}
`;

export default {
  Text,
  Strong,
  Title,
  Paragraph,
};
