import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Triangle = ({ output, setOutput }) => {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [amount, setAmount] = useState('');

  const addTriangle = () => {
    const listOfTriangles = [];
    for (var i = 0; i < amount; i++) {
      listOfTriangles.push({
        name: 'triangle',
        dimensions: `${base}x${height}`,
        area: (1 / 2) * base * height,
      });
    }
    setOutput([...output, ...listOfTriangles]);
    setBase('');
    setHeight('');
    setAmount('');
  };
  return (
    <div className="shape-input">
      <h2>Triangle:</h2>
      <TextField
        id="outlined-basic"
        label="Base"
        variant="outlined"
        value={base}
        onChange={(e) => {
          setBase(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Height"
        variant="outlined"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
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
      <Button variant="contained" onClick={addTriangle}>
        Add
      </Button>
    </div>
  );
};

export default Triangle;
