import React from 'react';
import { THProps } from './types';

const H3: React.FC<THProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={`mb-4 text-3xl font-semibold ${className ?? ''}`} {...props}>
      {children}
    </h3>
  );
};

export default H3;
