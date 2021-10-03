import { Header } from '../';

export const Layout = () => {
  return (
    <main className="bg-gray-ish min-h-screen w-full p-12 flex flex-col items-center">
      <div className="flex flex-col w-full max-w-5xl">
        <Header />
      </div>
    </main>
  );
};
