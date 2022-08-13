import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const run10000times = () => {
    for (let i = 0; i < 10000; i++) {
      setName('test' + i)
    }
  }
  console.log(`Re-rendering: ${name}`)
  return (
    <div className="App">
      <p>Name: {name}</p>
      <button onClick={() => run10000times()}>Change</button>
    </div>
  );
}

export default App;
