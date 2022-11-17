import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Services/Services';
import About from './components/About/About';
import Fonctions from './components/Fonctions/Fonctions';
import Prix from './components/Prix/Prix';
import Form from './components/Form/Form'
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <Services />
        <About />
        <Fonctions />
        <Prix />
        <Blog />
        <Form />
       
    </div>
  );
}

export default App;
