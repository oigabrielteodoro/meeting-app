import { ChatsCircle, GameController, Gear } from 'phosphor-react';

import Volume from './Volume';

import * as S from './Sider.styled';

export default function Sider() {
  return (
    <S.Container>
      <div />
      <S.Menu>
        <li>
          <S.MenuLink to="/chat">
            <ChatsCircle size={24} />
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/meeting" active>
            <GameController size={24} />
          </S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/settings">
            <Gear size={24} />
          </S.MenuLink>
        </li>
      </S.Menu>
      <Volume />
    </S.Container>
  );
}
