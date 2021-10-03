import { ThemeContext } from './themeContext';
import { useContext } from 'react';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <div className="flex cursor-pointer space-x-4" onClick={handleTheme}>
          <span className="text-s text-white tracking-wide">Light</span>
          <Sun className="text-gray-500 dark:text-gray-400 text-2xl" />
        </div>
      ) : (
        <div className="flex cursor-pointer space-x-4" onClick={handleTheme}>
          <span className="text-s text-gray tracking-wide">Dark</span>
          <Moon className="text-gray-500 dark:text-gray-400 text-2xl" />
        </div>
      )}
    </div>
  );
};
