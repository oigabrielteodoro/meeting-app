import styled from 'styled-components';

import theme from 'renderer/config/theme';
import { Typography } from 'renderer/ui';

export const Container = styled(Typography.Text)`
  display: flex;
  align-items: center;
`;

export const Bullet = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  background: ${theme.colors.red[500]};
  margin-right: ${theme.spacing[1]};
  border-radius: 0.2rem;
  box-shadow: 0 0 1rem 0.1rem ${theme.colors.red[500]};
`;
