import { createContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState();
  const value = { search, setSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
