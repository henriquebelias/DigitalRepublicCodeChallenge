import './App.css';
import { PaintProvider } from './context/PaintContext';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <PaintProvider>
      <LandingPage></LandingPage>
    </PaintProvider>
  );
}

export default App;
