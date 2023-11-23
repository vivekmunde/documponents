import React from 'react';
import H1 from '../h1';
import { THProps } from '../types';

const Title: React.FC<THProps> = ({ children, style, ...props }) => {
  return (
    <H1 style={{ margin: 0, ...style }} {...props}>
      {children}
    </H1>
  );
};

export default Title;
