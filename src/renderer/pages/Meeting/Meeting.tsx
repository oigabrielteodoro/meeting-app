import { Box, Layout } from 'renderer/ui';
import {
  Actions,
  InviteUser,
  OnCall,
  UserConnected,
} from 'renderer/features/meeting';

import * as S from './Meeting.styled';

export default function Meeting() {
  return (
    <>
      <Layout.Header />
      <Layout.Sider />
      <Layout.Content>
        <Box direction="vertical" spacing={4} full>
          <Box direction="horizontal" align="center" justify="between">
            <OnCall />
            <InviteUser />
          </Box>
          <S.Container>
            <UserConnected />
            <UserConnected active />
            <UserConnected />
            <UserConnected />
          </S.Container>
          <Actions />
        </Box>
      </Layout.Content>
    </>
  );
}
