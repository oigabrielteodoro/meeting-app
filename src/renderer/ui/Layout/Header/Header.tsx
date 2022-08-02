import { Circle, CirclesFour, CirclesThree, UsersThree } from 'phosphor-react';
import { Badge, Box, Typography, Logo } from 'renderer/ui';

import * as S from './Header.styled';

export default function Header() {
  return (
    <S.Container>
      <Box direction="horizontal" spacing={4} align="center">
        <Logo />
        <Box direction="horizontal" spacing={3} align="center">
          <Typography.Title as="h1" size="paragraph">
            Design Sprint Meeting
          </Typography.Title>
          <Badge variant="neutral">
            <Badge.Icon>
              <UsersThree size={20} />
            </Badge.Icon>
            Teams
          </Badge>
        </Box>
      </Box>
      <Box direction="horizontal" spacing={2}>
        <S.GridButton variant="neutral" active>
          <Circle size={20} />
        </S.GridButton>
        <S.GridButton variant="neutral">
          <CirclesThree size={20} />
        </S.GridButton>
        <S.GridButton variant="neutral">
          <CirclesFour size={20} />
        </S.GridButton>
      </Box>
    </S.Container>
  );
}
