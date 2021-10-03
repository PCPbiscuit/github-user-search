import { Toggle } from '../theme/themeToggle';

export const Header = () => {
  return (
    <div className="flex justify-between items-center text-black-dark">
      <h1 className="text-xl font-bold">devfinder</h1>
      <Toggle />
    </div>
  );
};
