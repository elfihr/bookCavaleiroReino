
import './App.css';
import About from './pages/About';
import AboutAuthor from './pages/AboutAuthor';
import Demo from './pages/Demo';
import Hero from './pages/Hero';
import Now from './pages/Now';
import Pusharse from './pages/Pusharse';
import VideoSuggest from './pages/VideoSuggest';

function App() {
  return (
    <div className="App">
    <main>
      <Hero/>
      <VideoSuggest/>
      <About/>
      <Pusharse/>
      <Demo/>
      <Now/>
      <AboutAuthor/>
    </main>
      
    </div>
  );
}

export default App;
