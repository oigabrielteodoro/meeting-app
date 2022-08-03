import { Layout } from 'renderer/ui';

import * as S from './Meeting.styled';

export default function Meeting() {
  return (
    <S.Container>
      <Layout.Header />
      <Layout.Sider />
      <Layout.Content>
        <h1>Content</h1>
      </Layout.Content>
    </S.Container>
  );
}
