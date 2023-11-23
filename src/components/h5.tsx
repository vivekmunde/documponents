import React from 'react';
import { THProps } from './types';

const H5: React.FC<THProps> = ({ children, className, ...props }) => {
  return (
    <h5 className={`mb-4 text-xl font-extrabold ${className ?? ''}`} {...props}>
      {children}
    </h5>
  );
};

export default H5;
