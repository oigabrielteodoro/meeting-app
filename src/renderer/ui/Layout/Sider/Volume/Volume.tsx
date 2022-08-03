import { useState } from 'react';
import { SpeakerHigh, SpeakerLow, SpeakerX } from 'phosphor-react';

import * as S from './Volume.styled';

const icons = {
  low: SpeakerLow,
  high: SpeakerHigh,
  muted: SpeakerX,
};

export default function Volume() {
  const [volume, setVolume] = useState(50);

  function getStatus(): keyof typeof icons {
    if (volume === 0) return 'muted';

    if (volume < 50) return 'low';

    return 'high';
  }

  function toggleStatus() {
    setVolume((prevState) => {
      const isMuted = prevState === 0;

      return isMuted ? 50 : 0;
    });
  }

  const Icon = icons[getStatus()];

  return (
    <S.Container>
      <S.Range
        type="range"
        max="100"
        min="0"
        value={String(volume)}
        onChange={(event) => setVolume(Number(event.target.value))}
      />

      <S.SpeakerButton onClick={toggleStatus}>
        <Icon size={20} />
      </S.SpeakerButton>
    </S.Container>
  );
}
