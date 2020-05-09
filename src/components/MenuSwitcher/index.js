import React from 'react';
import { MdDehaze } from 'react-icons/md';

import { Button } from './styles';

export default function MenuSwitcher({ toggleMenu }) {
  return (
    <Button onClick={toggleMenu}>
      <MdDehaze size={30} />
    </Button>
  );
}
