import React from 'react';
import {Drawer} from "antd";
import Filters from "../Filters";

interface FiltersDropdownProps {
  isOpened: boolean;
  onClose: () => void;
}

const FiltersDropdown = ({isOpened, onClose}: FiltersDropdownProps) => {
  return (
    <Drawer open={isOpened} onClose={onClose}>
      <Filters/>
    </Drawer>
  );
};

export default FiltersDropdown;