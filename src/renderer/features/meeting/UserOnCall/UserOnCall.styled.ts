import { SpeakerSlash } from 'phosphor-react';
import styled from 'styled-components';
import theme from 'renderer/config/theme';

export const Container = styled.div`
  background: rgba(73, 75, 77, 0.27);
  box-shadow: 0 0.4rem 3rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(50.5rem);
  border: 1px solid rgba(73, 75, 77, 0.21);
  border-radius: ${theme.borderStyles.lg};
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
`;

export const SpeakerSlashIcon = styled(SpeakerSlash)`
  position: absolute;
  top: ${theme.spacing[4]};
  left: ${theme.spacing[4]};
`;
