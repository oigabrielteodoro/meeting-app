import { Box, Layout } from 'renderer/ui';
import {
  Actions,
  InviteUser,
  Time,
  UserOnCall,
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
            <Time />
            <InviteUser />
          </Box>
          <S.Container>
            <UserOnCall muted />
            <UserOnCall active />
            <UserOnCall />
            <UserOnCall />
          </S.Container>
          <Actions />
        </Box>
      </Layout.Content>
    </>
  );
}
