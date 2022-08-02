import theme from 'renderer/config/theme';
import styled, { css } from 'styled-components';

const aligns = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const justified = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  between: 'space-between',
};

const directions = {
  vertical: 'column',
  horizontal: 'row',
};

export type BoxProps = {
  align?: keyof typeof aligns;
  justify?: keyof typeof justified;
  spacing?: keyof typeof theme.spacing;
  direction: keyof typeof directions;
  full?: boolean;
};

export default styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => directions[direction]};
  gap: ${({ spacing }) => spacing !== undefined && theme.spacing[spacing]};
  align-items: ${({ align }) => align && aligns[align]};
  justify-content: ${({ justify }) => justify && justified[justify]};

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;
