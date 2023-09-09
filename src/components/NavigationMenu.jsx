import { Menu,MenuItem } from '@mui/material';
import { useState } from 'react';
const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu
      open={open}
      onClose={() => setOpen(false)}
    >
      <MenuItem onClick={() => setOpen(false)}>
        Home
      </MenuItem>
      <MenuItem onClick={() => setOpen(false)}>
        Profile
      </MenuItem>
      <MenuItem onClick={() => setOpen(false)}>
        Settings
      </MenuItem>
    </Menu>
  );
};
export default NavigationMenu
