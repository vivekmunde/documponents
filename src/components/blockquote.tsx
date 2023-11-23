import React from 'react';
import { TComponentBaseProps } from './types';

const Blockquote: React.FC<TComponentBaseProps & React.HTMLProps<HTMLQuoteElement>> = ({
  children,
  className,
  ...props
}) => (
  <blockquote className={`p-4 bg-primary-50 rounded mt-4 mb-4 ${className ?? ''}`} {...props}>
    <strong className="font-medium">{children}</strong>
  </blockquote>
);

export default Blockquote;
