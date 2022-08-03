import { Avatar } from 'renderer/ui';
import * as S from './UserConnected.styled';

type Props = {
  active?: boolean;
};

export default function UserConnected({ active = false }: Props) {
  return (
    <S.Container>
      <Avatar
        size="large"
        src="https://github.com/oigabrielteodoro.png"
        alt="Gabriel Teodoro"
        highlight={active}
      />
    </S.Container>
  );
}
