import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <button className='btr btr-primary'>Prueba</button>
      <Navbar />
      <Body />
      <Body />
    </div>
  );
}

export default App;
