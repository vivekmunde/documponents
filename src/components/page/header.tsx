import React from 'react';

const Header: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <header className={`mb-6 ${className ?? ''}`}>{children}</header>;
};

export default Header;
