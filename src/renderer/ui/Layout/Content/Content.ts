import styled from 'styled-components';

import theme from 'renderer/config/theme';

export default styled.main`
  margin-left: ${theme.layout.sider};
  padding: ${theme.spacing[4]};
  min-height: calc(100vh - ${theme.layout.header});
  display: flex;
  flex-direction: column;
`;
