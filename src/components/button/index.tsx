import type { FC, MouseEventHandler } from 'react';

interface Props {
  className?: string;
  onClick?: MouseEventHandler;
  title: string;
}

export const Button: FC<Props> = ({ className, onClick, title }) => {
  return (
    <div onClick={onClick} className={className}>
      {title}
    </div>
  );
};
