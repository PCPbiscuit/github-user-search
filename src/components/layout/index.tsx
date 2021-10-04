import type { FC, ReactChildren } from 'react';

interface Props {
  children: ReactChildren;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="bg-gray-ish dark:bg-black-ish min-h-screen w-full p-12 flex flex-col items-center transition-all">
      <div className="flex flex-col w-full max-w-5xl">{children}</div>
    </main>
  );
};
