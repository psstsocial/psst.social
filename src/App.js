import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="tagline">
          nudge your friends
        </h1>
        <div className="badges">
        <a href="https://apps.apple.com/us/">
          <img className="badge" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store"></img>
        </a>
        <a href='http://play.google.com/store/'>
          <img className='badge' alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'></img>
        </a>  
        </div>    
      </header>
    </div>
  );
}

export default App;
