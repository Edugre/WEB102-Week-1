import './index.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      {/* Header */}
      <div className='header'>
        <h1>Your Daily Boost of Intelligence</h1>
        <h2>A board showcasing <a href='https://www.youtube.com/playlist?list=PLYzX0ekE83jvlDDWXGAX16pWwFuOnKoXS'>Skai's</a> curated Youtube playlist with must-watch, insightful videos for every CS Student.</h2>
        {/* Grid to display cards */}
        <div className='container'>
          <Card id='Dm68uFy6gus' title='Focusing Your Unconscious Mind: Learn Hard Concepts Intuitively (And Forever)' channel='Colin Galen'/>
          <Card id='R9OHn5ZF4Uo' title='How AIs, like ChatGPT, Learn' channel='CGP Grey'/>
          <Card id='eP_P4KOjwhs' title='Why Applications Are Operating-System Specific' channel='Core Dumped'/>
          <Card id='maBWP1YHIOI' title='How to think in systems (3 tools)' channel='Vicky Zhao [BEEAMP]'/>
          <Card id='zKDkhSTJciY' title="You've consumed enough. It's time to start creating." channel='Sam William'/>
          <Card id='Vt-nGEjcFzo' title='How to Survive (and Thrive) In This TOUGH Developer Economy' channel='Travis Media'/>
          <Card id='kQUwImj32PA' title='How to think like A GENIUS Programmer' channel='Lattice'/>
          <Card id='ba58WZd0NaE' title='How to Kill Distractions like a Pro? 🔥' channel='Quantum Project - Tharun Speaks'/>
          <Card id='Ym-B_IbdgzQ' title='The End Of Coding?' channel='HuXn WebDev'/>
          <Card id='suATPK45sjk' title='How to Become a Great Software Developer — Best Advice from Top-Notch Engineers' channel='EngX Space'/>
          <Card id='UY3ZQMvregQ' title='how to cure brain rot' channel='Gohar Khan'/>
          <Card id='zpOEDKGVcxA' title='How to Answer Interview Questions when You Lack the Experience' channel='Andrew LaCivita'/>
        </div>
      </div>
    </div>
  )
}

export default App