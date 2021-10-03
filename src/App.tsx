import { Layout, Header, Search } from './components';
import { ThemeProvider } from './components/theme/themeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Search />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
