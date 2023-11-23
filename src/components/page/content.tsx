import React from 'react';
import { TComponentBaseProps } from '../types';

const Content: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Content;
