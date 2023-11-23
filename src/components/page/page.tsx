import React from 'react';
import { TComponentBaseProps } from '../types';

const Page: React.FC<TComponentBaseProps & React.HTMLProps<HTMLElement>> = ({ children, ...props }) => {
  return <article {...props}>{children}</article>;
};

export default Page;
