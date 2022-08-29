import logo from './logo.svg';
import './App.css';
import './components/PinPad/pinpad.scss';
import PinPad from './components/PinPad/PinPad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PIN PAD</h1>
        <PinPad/>
      </header>
    </div>
  );
}

export default App;
