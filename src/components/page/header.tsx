import React from 'react';
import { LeftOpener } from '../layout/left-toggler';
import { TComponentBaseProps } from '../types';

const Header: React.FC<TComponentBaseProps & React.HTMLProps<HTMLElement>> = ({ children, className, ...props }) => {
  return (
    <header className={`mb-6 flex flex-row items-center gap-2 ${className ?? ''}`} {...props}>
      <LeftOpener className="lg:hidden" />
      {children}
    </header>
  );
};

export default Header;
