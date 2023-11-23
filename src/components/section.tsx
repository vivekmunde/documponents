import React from 'react';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import H4 from './h4';
import H5 from './h5';
import { TComponentBaseProps, THProps } from './types';

export const Title: React.FC<THProps & { id?: string; level?: 1 | 2 | 3 | 4 | 5 }> = ({
  children,
  id,
  level,
  ...props
}) => {
  const renderInnerComponent = () => (id ? <a href={`#${id}`}>{children}</a> : children);

  if (level === 1) {
    return <H1 {...props}>{renderInnerComponent()}</H1>;
  }
  if (level === 2) {
    return <H2 {...props}>{renderInnerComponent()}</H2>;
  }
  if (level === 3) {
    return <H3 {...props}>{renderInnerComponent()}</H3>;
  }
  if (level === 4) {
    return <H4 {...props}>{renderInnerComponent()}</H4>;
  }
  return <H5 {...props}>{renderInnerComponent()}</H5>;
};

const Section: React.FC<TComponentBaseProps & React.HTMLProps<HTMLElement>> = ({ children, className, ...props }) => {
  return (
    <section className={`mb-6 ${className ?? ''}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
