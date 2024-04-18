import { forwardRef, CSSProperties, ReactNode } from 'react';

interface GridListComponentProps {
  style?: CSSProperties;
  children?: ReactNode;
}

interface GridItemComponentProps {
  children?: ReactNode;
}

export const gridComponents = {
  List: forwardRef<HTMLDivElement, GridListComponentProps>(
    ({ style, children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          ...style,
        }}
      >
        {children}
      </div>
    ),
  ),
  Item: ({ children, ...props }: GridItemComponentProps) => (
    <div
      {...props}
      style={{
        padding: '0.5rem',
        width: '33%',
        display: 'flex',
        flex: 'none',
        alignContent: 'stretch',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  ),
};
