import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Circle = ({ output, setOutput }) => {
  const [radius, setRadius] = useState('');
  const [amount, setAmount] = useState('');

  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  };

  const addCircle = () => {
    const listOfCircles = [];
    for (var i = 0; i < amount; i++) {
      listOfCircles.push({
        name: 'circle',
        radius: `${radius}`,
        area: round(Math.PI * Math.pow(radius, 2), 2),
      });
    }
    setOutput([...output, ...listOfCircles]);
    setRadius('');
    setAmount('');
  };
  return (
    <div className="shape-input">
      <h2>Circle:</h2>
      <TextField
        id="outlined-basic"
        label="Radius"
        variant="outlined"
        value={radius}
        onChange={(e) => {
          setRadius(e.target.value);
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
      <Button variant="contained" onClick={addCircle}>
        Add
      </Button>
    </div>
  );
};

export default Circle;
