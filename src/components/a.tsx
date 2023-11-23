import React from 'react';
import { TComponentBaseProps } from './types';

export type TAProps = TComponentBaseProps & React.HTMLProps<HTMLAnchorElement>;

const A: React.FC<TAProps> = ({ children, className, rel, ...props }) => {
  return (
    <a
      className={`text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 ${
        className ?? ''
      }`}
      rel={props.target === '_blank' ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ') : rel}
      {...props}
    >
      {children}
    </a>
  );
};

export default A;
