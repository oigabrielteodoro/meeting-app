import { Headphones, Microphone, PhoneDisconnect } from 'phosphor-react';

import { Box, Button, Tooltip } from 'renderer/ui';

export default function Actions() {
  return (
    <Box direction="horizontal" spacing={3} justify="center">
      <Tooltip message="Microfone" position="top">
        <Button.Icon variant="black">
          <Microphone size={20} />
        </Button.Icon>
      </Tooltip>
      <Tooltip message="Desconectar" position="top">
        <Button.Icon variant="red">
          <PhoneDisconnect size={20} />
        </Button.Icon>
      </Tooltip>
      <Tooltip message="Áudio" position="top">
        <Button.Icon variant="black">
          <Headphones size={20} />
        </Button.Icon>
      </Tooltip>
    </Box>
  );
}
