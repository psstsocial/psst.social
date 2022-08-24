import logo from './assets/logo.svg';
import './App.scss';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["nudge", "poke", "annoy", "psst", "ping", "notify"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 120,
      backDelay: 500,
      smartBackspace: false,
      shuffle: true,
      loop: true,
      showCursor: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="tagline">
        <span ref={el}></span> your friends
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
