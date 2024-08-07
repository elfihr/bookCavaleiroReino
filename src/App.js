
import './App.css';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import About from './pages/About';
import Author from './pages/Author';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Faq from './pages/Faq';
import Hero from './pages/Hero';
import Now from './pages/Now';
import Pusharse from './pages/Pusharse';
import Sell from './pages/Sell';
import Testimonials from './pages/Testimonials';
import VideoSuggest from './pages/VideoSuggest';

function App() {
  return (
    <div className="App">
    <Navbar/>

      <Hero/>
      <VideoSuggest/>
      <About/>
      <Pusharse/>
      <Demo/>
      <Now/>
      <Author/>
      <Sell/>
      <Testimonials/>
      <Contact/>
      <Faq/>

    <Footer/>
      
    </div>
  );
}

export default App;
