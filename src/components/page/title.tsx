import React, { CSSProperties } from 'react';
import H1 from '../h1';

const Title: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  return (
    <H1 className={className ?? ''} style={{ margin: 0, ...style }}>
      {children}
    </H1>
  );
};

export default Title;
