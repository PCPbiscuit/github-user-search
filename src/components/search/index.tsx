import type { FC } from 'react';
import { useContext } from 'react';

import { ReactComponent as SearchIcon } from './search.svg';
import { SearchContext } from './searchContext';
import { Button, Input } from '../';

export const Search: FC = () => {
  const [search, setSearch] = useContext(SearchContext);

  const handleClick = e => {
    console.log(e);
  };
  const handleSearch = e => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-white-ish dark:bg-blue-dark w-full p-2.5 pl-8 rounded-2xl shadow-search mt-9 mb-6 flex justify-between items-center">
      <SearchIcon className="cursor-pointer w-7 h-7 mt-1.5" />
      <Input
        className="w-full mx-6 text-lg ring-0 outline-none focus:ring-0 caret-blue placeholder-blue-ish bg-transparent dark:placeholder-white-ish dark:text-white"
        placeholder="Search GitHub username…"
        onChange={handleSearch}
        value={search}
      />
      <Button
        title="Search"
        onClick={handleClick}
        className="text-base flex justify-center items-center px-6 py-3 bg-blue text-white w-fit font-bold rounded-xl cursor-pointer "
      />
    </div>
  );
};
