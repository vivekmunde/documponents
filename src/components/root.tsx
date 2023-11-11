import React from 'react';

const Root: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="dark:bg-black dark:text-neutral-300">{children}</div>;
};

export default Root;
