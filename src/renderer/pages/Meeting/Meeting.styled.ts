import theme from 'renderer/config/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theme.spacing[4]};
  flex: 1;
`;
