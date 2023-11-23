import React from 'react';
import { TComponentBaseProps } from '../types';

const Content: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`p-4 pb-16 flex-1 h-[100vh] lg:pr-[10vw] overflow-x-auto ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};

export default Content;
