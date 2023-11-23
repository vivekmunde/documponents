import React from 'react';
import { TComponentBaseProps } from './types';

const Paragraph: React.FC<TComponentBaseProps & React.HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={`mb-4 ${className ?? ''}`} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
