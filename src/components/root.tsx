import React from 'react';
import { TComponentBaseProps } from './types';

const Root: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={`dark:bg-black dark:text-neutral-300 ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};

export default Root;
