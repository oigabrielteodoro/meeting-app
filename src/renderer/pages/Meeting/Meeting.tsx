import { Box, Layout } from 'renderer/ui';
import { InviteUser, OnCall } from 'renderer/features/meeting';

import * as S from './Meeting.styled';

export default function Meeting() {
  return (
    <S.Container>
      <Layout.Header />
      <Layout.Sider />
      <Layout.Content>
        <Box direction="horizontal" align="center" justify="between">
          <OnCall />
          <InviteUser />
        </Box>
      </Layout.Content>
    </S.Container>
  );
}
