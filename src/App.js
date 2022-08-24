import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Psst Social
        </h1>
        <form>
        <label for="email">Join our mailing list: </label>
        <input type="email" name="email" placeholder="Enter your email"></input>
        <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
