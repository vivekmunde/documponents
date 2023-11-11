import React from 'react';

const Page: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <article className={className}>{children}</article>;
};

export default Page;
