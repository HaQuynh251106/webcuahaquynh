import React from 'react';
import ClipList from './components/ClipList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My clip</h1>
      </header>
      <main>
        <ClipList />
      </main>
      <footer>
        <p>Frontend Web Development with React - Set03 Practical Paper</p>
      </footer>
    </div>
  );
}

export default App;
