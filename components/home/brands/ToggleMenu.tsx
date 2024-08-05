"use client"

import React, { useState } from 'react';
import { Md18Mp, MdArrowBackIosNew, MdArrowDownward, MdArrowDropDown, MdOutlineArrowForward, MdSwitchRight } from 'react-icons/md';

interface ToggleMenuProps {
  title: string;
  children: React.ReactNode;
}

const ToggleMenu: React.FC<ToggleMenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button className="flex w-full justify-between text-left p-4 bg-gray-200  rounded-md" onClick={toggleMenu}>
        {title}
        <div className={`my-auto  ${isOpen ? 'rotate-90 transform' : '-rotate-90 transform'}`}><MdArrowBackIosNew/></div>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default ToggleMenu;
