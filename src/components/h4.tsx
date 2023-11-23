import React from 'react';
import { THProps } from './types';

const H4: React.FC<THProps> = ({ children, className, ...props }) => {
  return (
    <h4 className={`mb-4 text-2xl font-bold ${className ?? ''}`} {...props}>
      {children}
    </h4>
  );
};

export default H4;
