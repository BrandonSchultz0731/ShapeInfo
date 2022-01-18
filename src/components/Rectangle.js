import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Rectangle = ({ output, setOutput }) => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [amount, setAmount] = useState('');

  const addRectangle = () => {
    console.log('clicking...');
    const listOfRectangles = [];
    const shape = length === width ? 'square' : 'rectangle';
    for (var i = 0; i < amount; i++) {
      listOfRectangles.push({
        name: shape,
        dimensions: `${length}x${width}`,
        area: length * width,
      });
    }
    setOutput([...output, ...listOfRectangles]);
    setLength('');
    setWidth('');
    setAmount('');
  };
  return (
    <div className="shape-input">
      <h2>Rectangle:</h2>
      <TextField
        id="outlined-basic"
        label="Length"
        variant="outlined"
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Width"
        variant="outlined"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="How Many?"
        variant="outlined"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <Button variant="contained" onClick={addRectangle}>
        Add
      </Button>
    </div>
  );
};

export default Rectangle;
