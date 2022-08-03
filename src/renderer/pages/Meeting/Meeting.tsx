import { Layout } from 'renderer/ui';

import * as S from './Meeting.styled';

export default function Meeting() {
  return (
    <S.Container>
      <Layout.Header />
      <Layout.Sider />
    </S.Container>
  );
}
