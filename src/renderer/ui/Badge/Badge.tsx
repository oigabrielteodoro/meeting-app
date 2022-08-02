import { ReactNode } from 'react';

import { BadgeProps, Container, Icon } from './Badge.styled';

type Props = {
  children: ReactNode;
};

export default function Badge({ children, variant }: Props & BadgeProps) {
  return <Container variant={variant}>{children}</Container>;
}

Badge.Icon = Icon;
