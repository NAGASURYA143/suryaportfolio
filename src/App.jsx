import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    

    <div className="portfolio">
      <header className="header">
        <h1>Surya</h1>
        <p>Profitable Trader | Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate trader with a knack for spotting profitable opportunities in the market.
          Alongside trading, I create responsive and modern web applications.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Stock & Crypto Trading</li>
          <li>React.js & JavaScript</li>
          <li>Technical Analysis</li>
          <li>Frontend Development</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Trading Portfolio Tracker</h3>
          <p>A web app to track and analyze trades in real time.</p>
        </div>
        <div className="project-card">
          <h3>Digital Wallet App</h3>
          <p>Secure online wallet for payments, transfers, and budgeting.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Surya | Contact: surya@example.com</p>
      </footer>
    </div>
    </>
  );
}

export default App;


