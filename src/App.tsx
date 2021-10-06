import { Layout, Header, Search, Card } from './components';
import { ThemeProvider } from './components/theme/themeContext.jsx';
import SearchProvider from './components/search/searchContext.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SearchProvider>
          <Layout>
            <Header />
            <Search />
            <Card />
          </Layout>
        </SearchProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
