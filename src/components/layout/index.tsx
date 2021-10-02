import { Header } from '../';

export const Layout = () => {
  return (
    <main className="bg-gray-ish min-h-screen w-full py-[10%] px-[25%] flex flex-col items-center">
      <div className="flex flex-col w-full">
        <Header />
      </div>
    </main>
  );
};
