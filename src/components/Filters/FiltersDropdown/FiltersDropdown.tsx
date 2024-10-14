import React from 'react';
import {Drawer} from "antd";
import FiltersSidebar from "../FiltersSidebar/FiltersSidebar";

interface FiltersDropdownProps {
  isOpened: boolean;
  onClose: () => void;
}

const FiltersDropdown = ({isOpened, onClose}: FiltersDropdownProps) => {
  return (
    <Drawer open={isOpened} onClose={onClose}>
      <FiltersSidebar/>
    </Drawer>
  );
};

export default FiltersDropdown;