import { Avatar } from 'renderer/ui';

import * as S from './UserOnCall.styled';

type Props = {
  muted?: boolean;
  active?: boolean;
};

export default function UserOnCall({ active = false, muted }: Props) {
  return (
    <S.Container>
      {muted && <S.SpeakerSlashIcon size={20} />}
      <Avatar
        size="large"
        src="https://github.com/oigabrielteodoro.png"
        alt="Gabriel Teodoro"
        highlight={active}
      />
    </S.Container>
  );
}
