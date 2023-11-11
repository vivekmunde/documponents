import React, { CSSProperties } from 'react';

const H3: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  return (
    <h3 className={`mb-4 text-3xl font-semibold ${className ?? ''}`} style={style}>
      {children}
    </h3>
  );
};

export default H3;
