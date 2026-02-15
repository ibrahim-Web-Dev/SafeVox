import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-safe-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Impact />
        <Team />
      </main>
      <Contact />
    </div>
  );
}

export default App;
