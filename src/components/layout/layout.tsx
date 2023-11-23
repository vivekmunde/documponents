import React from 'react';
import { TComponentBaseProps } from '../types';

const Layout: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={`flex flex-row h-[100vh] lg:pl-[10vw] ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};

export default Layout;
