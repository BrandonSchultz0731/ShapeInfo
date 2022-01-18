import './App.css';
import Rectangle from './components/Rectangle';
import Triangle from './components/Triangle';
import Circle from './components/Circle';
import { useState } from 'react';

function App() {
  const [output, setOutput] = useState([]);

  return (
    <div className="App">
      <div className="shape-container">
        <Rectangle output={output} setOutput={setOutput} />
        <Triangle output={output} setOutput={setOutput} />
        <Circle output={output} setOutput={setOutput} />
      </div>
      <div className="output-container">
        <h2>Output: </h2>
        {output.map((shape, index) => (
          <p key={index}>
            name: {shape.name},{' '}
            {shape.name === 'circle' ? 'radius' : 'dimensions'}:{' '}
            {shape.name === 'circle' ? shape.radius : shape.dimensions}, area:{' '}
            {shape.area}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
