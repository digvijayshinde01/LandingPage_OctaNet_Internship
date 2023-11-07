import './App.css';
import Hero from './components/Hero.jsx';
import Plans from './components/Plans';
import Program from './components/Program';
import Reason from './components/Reason';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      
      <Join />
      <Footer />
    </div>
  );
}

export default App;
