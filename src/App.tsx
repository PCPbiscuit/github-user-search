import { Layout, Header, Search, Card } from './components';
import { ThemeProvider } from './components/theme/themeContext.jsx';
import { SearchContextProvider } from './components/search/searchContext.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SearchContextProvider>
          <Layout>
            <Header />
            <Search />
            <Card />
          </Layout>
        </SearchContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
