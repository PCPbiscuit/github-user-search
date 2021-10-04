import { Layout, Header, Search, Card } from './components';
import { ThemeProvider } from './components/theme/themeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Search />
        <Card />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
