import React, { CSSProperties } from 'react';

const H4: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  return (
    <h4 className={`mb-4 text-2xl font-bold ${className ?? ''}`} style={style}>
      {children}
    </h4>
  );
};

export default H4;
