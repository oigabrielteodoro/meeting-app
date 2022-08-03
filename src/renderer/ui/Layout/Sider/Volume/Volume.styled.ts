import theme from 'renderer/config/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 4.2rem;
  background: ${theme.colors.neutral[700]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: ${theme.spacing[3]};
  border-radius: ${theme.borderStyles.md};
  gap: ${theme.spacing[3]};
`;

export const Range = styled.input`
  -webkit-appearance: none;
  transform: rotate(270deg) translateX(5rem);
  margin-top: 10rem;
  height: 0.3rem;
  width: 10rem;
  border-radius: ${theme.borderStyles.sm};
  background: ${theme.colors.neutral[500]};
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: ${theme.borderStyles.sm};
    background: ${theme.colors.purple[500]} !important;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    background: ${theme.colors.purple[500]};
    width: ${({ value }) => value}px;
    height: 0.2rem;
    top: 0;
  }
`;

export const SpeakerButton = styled.button`
  background: transparent;
  border: 0;
  color: ${theme.colors.white};
  display: grid;
  place-items: center;
  border-radius: ${theme.borderStyles.rounded};
  transition: all ${theme.transitions.fast};

  &:focus,
  &:hover {
    color: ${theme.colors.purple[500]};
  }
`;
