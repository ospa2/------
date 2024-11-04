import cn from './utils1';
import React from 'react';

interface Props {
  className?: string;
}

export const Box: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1280px] bg-purple-700 rounded-lg padding flex justify-center', className)}>{children}</div>;
};
