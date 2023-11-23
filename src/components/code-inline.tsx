import React from 'react';
import { TComponentBaseProps } from './types';

const CodeInline: React.FC<TComponentBaseProps & React.HTMLProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <code className={`font-mono px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 ${className}`} {...props}>
      {children}
    </code>
  );
};

export default CodeInline;
