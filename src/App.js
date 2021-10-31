import { PaintProvider } from './context/PaintContext';
import { GlobalStyles } from './GlobalStyles.sc';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <PaintProvider>
      <GlobalStyles />
      <LandingPage></LandingPage>
    </PaintProvider>
  );
}

export default App;
