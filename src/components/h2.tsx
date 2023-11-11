import React, { CSSProperties } from 'react';

const H2: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  return (
    <h4 className={`mb-4 text-4xl font-semibold ${className ?? ''}`} style={style}>
      {children}
    </h4>
  );
};

export default H2;
