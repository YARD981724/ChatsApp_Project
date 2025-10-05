// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
// Don't forget to import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // `isOpen` will be true when the menu is open, false when closed
  const [isOpen, setIsOpen] = useState(false);

  // This function toggles the value of `isOpen`
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // The `dropup-center` and `dropup` classes control the menu's position
    <div className="dropup-center dropup">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        // The onClick event calls our handler to toggle the state
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
    
      </button>
      {/* Conditionally add the `show` class to display the menu */}
      <ul className={`dropdown-menu ram ${isOpen?'show':''}`}>
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Action two</a></li>
        <li><a className="dropdown-item" href="#">Action three</a></li>
      </ul>
    </div>
  );
};

export default App;