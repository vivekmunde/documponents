import React, { CSSProperties } from 'react';

const H5: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  return (
    <h5 className={`mb-4 text-xl font-extrabold ${className ?? ''}`} style={style}>
      {children}
    </h5>
  );
};

export default H5;
