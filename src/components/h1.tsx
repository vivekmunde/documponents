import React from 'react';
import { THProps } from './types';

const H1: React.FC<THProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={`mb-4 text-5xl font-semibold ${className ?? ''}`} {...props}>
      {children}
    </h1>
  );
};

export default H1;
