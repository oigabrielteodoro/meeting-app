import { useEffect, useState } from 'react';

import * as S from './OnCall.styled';

export default function OnCall() {
  const [seconds, setSeconds] = useState(0);

  const timeOnCall = new Date(seconds * 1000).toISOString().slice(11, 19);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Container type="neutral" size="small" weight="medium">
      <S.Bullet />
      Em chamada {timeOnCall}
    </S.Container>
  );
}
