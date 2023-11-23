import React from 'react';
import { TComponentBaseProps } from './types';

const CodeBlock: React.FC<TComponentBaseProps & React.HTMLProps<HTMLElement>> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <code
      className={`mb-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded whitespace-pre font-mono  ${className ?? ''}`}
      style={{ display: 'block', overflow: 'auto', maxHeight: '90vh', ...style }}
      {...props}
    >
      {children}
    </code>
  );
};

export default CodeBlock;
