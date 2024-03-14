import logo from './logo.svg';

import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
