// src/layout/Header.tsx
import React from 'react';
import logo from '../assets/logo.png'; // Adjust path if needed
import { FiMenu } from 'react-icons/fi';

interface HeaderProps {
  isMobile: boolean;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, onMenuClick }) => {
  return (
    <header
      className={`w-full bg-transparent flex items-center ${
        isMobile ? 'justify-between px-4 pt-4' : 'absolute top-0 left-0 p-4'
      }`}
    >
      <div className="flex items-center ml-10">
        {/* Logo Image */}
        <img
          src={logo}
          alt="logo"
          className={`w-24 h-18 ${isMobile ? 'text-white' : 'ml-10'}`}
        />
      </div>
      <div className="flex items-center ml-auto lg:mr-20">
        {/* Menu Icon */}
        <FiMenu
          className={`text-white ${isMobile ? 'w-10 h-10 mb-4' : 'w-8 h-8'}`}
          onClick={onMenuClick}
        />
      </div>
    </header>
  );
};

export default Header;

