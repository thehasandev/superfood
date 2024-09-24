import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1470px] mx-auto">{children}</div>;
}

