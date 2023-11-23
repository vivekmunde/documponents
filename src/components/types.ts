import { CSSProperties } from 'react';

export type TComponentBaseProps = { children: React.ReactNode; className?: string; style?: CSSProperties };

export type THProps = TComponentBaseProps & React.HTMLProps<HTMLHeadingElement>;
