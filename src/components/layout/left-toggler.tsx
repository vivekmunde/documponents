import { publish } from 'pusu';
import React from 'react';
import { toggleLeft } from './publications';

export const LeftOpener: React.FC<Omit<React.HTMLProps<HTMLButtonElement>, 'type'>> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`flex flex-col justify-evenly items-center lg:hidden w-[32px] h-[32px] ${className ?? ''}`}
      onClick={(e) => {
        publish(toggleLeft, true);
        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      <span className="h-[1px] bg-neutral-500 w-[24px] rounded" />
      <span className="h-[1px] bg-neutral-500 w-[24px] rounded" />
      <span className="h-[1px] bg-neutral-500 w-[24px] rounded" />
    </button>
  );
};

export const LeftCloser: React.FC<Omit<React.HTMLProps<HTMLButtonElement>, 'type'>> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`lg:hidden w-[32px] h-[32px] ${className ?? ''}`}
      onClick={(e) => {
        publish(toggleLeft, false);
        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      <span className="flex flex-col items-center justify-center">
        <span className="h-[1px] bg-neutral-500 w-[24px] rounded rotate-[45deg]" />
        <span className="mt-[-1px] h-[1px] bg-neutral-500 w-[24px] rounded rotate-[-45deg]" />
      </span>
    </button>
  );
};
