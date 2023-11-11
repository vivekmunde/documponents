import React, { CSSProperties } from 'react';

const H1: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  return (
    <h1 className={`mb-4 text-5xl font-semibold ${className ?? ''}`} style={style}>
      {children}
    </h1>
  );
};

export default H1;
