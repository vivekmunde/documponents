import React from 'react';
import { THProps } from './types';

const H2: React.FC<THProps> = ({ children, className, ...props }) => {
  return (
    <h4 className={`mb-4 text-4xl font-semibold ${className ?? ''}`} {...props}>
      {children}
    </h4>
  );
};

export default H2;
