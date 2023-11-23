import { subscribe } from 'pusu';
import React, { useEffect, useRef } from 'react';
import { TComponentBaseProps } from '../types';
import Backdrop from './backdrop';
import { LeftCloser } from './left-toggler';
import { toggleLeft } from './publications';

export const Header: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-row items-start justify-between gap-1">
      <div className={`flex flex-row ${className ?? ''}`} {...props}>
        {children}
      </div>
      <LeftCloser />
    </div>
  );
};

export const Title: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`mb-6 text-2xl font-bold leading-none ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};

export const Panel: React.FC<TComponentBaseProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const refLeft = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filterClassNames = ['opacity-0', 'opacity-100', 'translate-x-0', '-translate-x-full'];

    return subscribe(toggleLeft, (open) => {
      if (refLeft.current) {
        if (open) {
          refLeft.current.setAttribute(
            'class',
            [
              refLeft.current.className
                .split(' ')
                .filter((c) => filterClassNames.indexOf(c) === -1)
                .join(' '),
              'translate-x-0',
              'opacity-100',
            ].join(' '),
          );
        } else {
          refLeft.current.setAttribute(
            'class',
            [
              refLeft.current.className
                .split(' ')
                .filter((c) => filterClassNames.indexOf(c) === -1)
                .join(' '),
              'opacity-0',
              '-translate-x-full',
            ].join(' '),
          );
        }
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Backdrop />
      <div
        ref={refLeft}
        className={[
          'bg-neutral-50 dark:bg-black lg:bg-neutral-100 dark:lg:bg-neutral-900 lg:rounded',
          'lg:block',
          'absolute lg:relative z-20',
          'opacity-0 lg:opacity-100',
          'md:w-[400px] lg:w-[320px]',
          'inset-3 -translate-x-full md:right-auto lg:inset-auto lg:translate-x-0',
          'transition-all duration-200',
          'rounded-lg',
          'overflow-y-auto',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </div>
    </React.Fragment>
  );
};
