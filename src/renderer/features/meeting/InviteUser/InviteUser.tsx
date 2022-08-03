import { UserPlus } from 'phosphor-react';

import { Box, Button } from 'renderer/ui';

export default function InviteUser() {
  return (
    <Button size="large">
      <Box direction="horizontal" spacing={1} align="center">
        <UserPlus size={20} />
        Convidar
      </Box>
    </Button>
  );
}
