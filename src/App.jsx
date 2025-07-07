import Navbar from './components/Navbar';
import Home from './pages/Home';
// Later: import About from './pages/About';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Navbar />
      <Home />
      {/* Later: <About /> */}
    </div>
  );
}

export default App;