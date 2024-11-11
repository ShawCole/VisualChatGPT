///////////////////////
// Welcome to Cursor //
///////////////////////

/*
Step 1: Try generating a react component that lets you play tictactoe with Cmd+K or Ctrl+K on a new line.
  - Then integrate it into the code below and run with npm start

Step 2: Try highlighting all the code with your mouse, then hit Cmd+k or Ctrl+K. 
  - Instruct it to change the game in some way (e.g. add inline styles, add a start screen, make it 4x4 instead of 3x3)

Step 3: Hit Cmd+L or Ctrl+L and ask the chat what the code does

Step 4: To try out cursor on your own projects, go to the file menu (top left) and open a folder.
*/


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [buttonText, setButtonText] = useState("That was easy");

  const handleClick = () => {
    setButtonText("Thank you");
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <header style={{ backgroundColor: '#4a90e2', padding: '20px', color: 'white' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'inline', margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li style={{ display: 'inline', margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
            <li style={{ display: 'inline', margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main style={{ marginTop: '50px' }}>
        <button
          onClick={handleClick}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {buttonText}
        </button>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);