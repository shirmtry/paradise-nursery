import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-tagline">
            Where houseplants meet happiness. Bringing nature into your home
            with a curated collection of beautiful, healthy plants.
          </p>
          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
