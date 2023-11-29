import { publish } from 'pusu';
import React from 'react';
import A, { TAProps } from './a';
import { toggleLeft } from './layout/publications';
import { TComponentBaseProps, THProps } from './types';

export const Panel: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const Nav: React.FC<TComponentBaseProps & React.HTMLProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <nav className={`flex flex-col gap-1 ${className ?? ''}`} {...props}>
      {children}
    </nav>
  );
};

export const Section: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={`mb-4 flex flex-col gap-1 ${className ?? ''}`} {...props}>
      {children}
    </section>
  );
};

export const Title: React.FC<THProps> = ({ children, className, ...props }) => {
  return (
    <h5
      className={`mb-1 font-medium text-base uppercase text-neutral-700 dark:text-neutral-400 ${className ?? ''}`}
      {...props}
    >
      {children}
    </h5>
  );
};

export const Link: React.FC<TAProps> = ({ onClick, ...props }) => {
  return (
    <A
      onClick={(e) => {
        publish(toggleLeft, false);
        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    />
  );
};
