import styled from 'styled-components';

import theme from 'renderer/config/theme';

export const Container = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  display: grid;
  place-items: center;
  background: ${theme.colors.purple[500]};
  border-radius: ${theme.borderStyles.rounded};
`;
