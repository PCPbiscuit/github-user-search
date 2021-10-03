import { Layout } from './components';
import { ThemeProvider } from './components/theme/themeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
