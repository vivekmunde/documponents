import { subscribe } from 'pusu';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { toggleLeft } from './publications';

const BackdropOpacity: React.FC = () => {
  const refBackdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filterClassNames = ['opacity-0', 'opacity-50'];

    return subscribe(toggleLeft, (open) => {
      if (refBackdrop.current) {
        if (open) {
          refBackdrop.current.setAttribute(
            'class',
            [
              refBackdrop.current.className
                .split(' ')
                .filter((c) => filterClassNames.indexOf(c) === -1)
                .join(' '),
              'opacity-50',
            ].join(' '),
          );
        } else {
          refBackdrop.current.setAttribute(
            'class',
            [
              refBackdrop.current.className
                .split(' ')
                .filter((c) => filterClassNames.indexOf(c) === -1)
                .join(' '),
              'opacity-0',
            ].join(' '),
          );
        }
      }
    });
  }, []);

  return (
    <div
      ref={refBackdrop}
      className="absolute opacity-0 bg-neutral-500 dark:bg-neutral-800 z-10 inset-0 transition-opacity duration-300"
    />
  );
};

const Backdrop: React.FC = () => {
  const refBackdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filterClassNames = ['translate-x-0', '-translate-x-full', 'transition-none', 'transition', 'delay-300'];

    return subscribe(toggleLeft, (open) => {
      if (refBackdrop.current) {
        if (open) {
          refBackdrop.current.setAttribute(
            'class',
            [
              refBackdrop.current.className
                .split(' ')
                .filter((c) => filterClassNames.indexOf(c) === -1)
                .join(' '),
              'transition-none',
              'translate-x-0',
            ].join(' '),
          );
        } else {
          refBackdrop.current.setAttribute(
            'class',
            [
              refBackdrop.current.className
                .split(' ')
                .filter((c) => filterClassNames.indexOf(c) === -1)
                .join(' '),
              'transition',
              'delay-300',
              '-translate-x-full',
            ].join(' '),
          );
        }
      }
    });
  }, []);

  return createPortal(
    <div ref={refBackdrop} className="lg:hidden absolute z-10 inset-0 -translate-x-full duration-300">
      <BackdropOpacity />
    </div>,
    document.body,
  );
};

export default Backdrop;
