import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

const NewRegistration = () => {
  const [selectedEntryTime, setSelectedEntryTime] = useState('');
  const [selectedExitTime, setSelectedExitTime] = useState('');
  const [diffinMin, setDiffinMin] = useState(0);

  const handleTimeentry = (event) => {
    setSelectedEntryTime(event.target.value);
  };

  const handleTimeexit = (event) => {
    const exitTimeValue = event.target.value;
    setSelectedExitTime(exitTimeValue);

    const entryTime = new Date(`0001-01-01T${selectedEntryTime}:00`);
    const exitTime = new Date(`0001-01-01T${exitTimeValue}:00`);
    const differenceInMs = Math.abs(entryTime.getTime() - exitTime.getTime());
    const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
    setDiffinMin(differenceInMinutes);
    console.log(`Time difference: ${differenceInMinutes} minutes`);
  };

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [price, setPrice] = useState(0);

  const handleChangeA = (event) => {
    const selectedValue = event.target.value;
    setA(selectedValue);
    setPrice(diffinMin * (100 / 60));
  };

  const handleChangeB = (event) => {
    const selectedValue = event.target.value;
    setB(selectedValue);
    setPrice(diffinMin * (80 / 60));
  };

  const handleChangeC = (event) => {
    const selectedValue = event.target.value;
    setC(selectedValue);
    setPrice(diffinMin * (50 / 60));
  };

  return (
    <>
      <form style={{ width: '50%', marginTop: '1rem' }}>
        <Typography>Room Allotment</Typography>
        <TextField
          required
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          label="Room No"
          margin="normal"
          variant="outlined"
        />
        <Typography>Entry Date</Typography>
        <TextField
          type="date"
          id="appt-date-entry"
          name="appt-date-entry"
          // value={selectedDate}
          // onChange={handleTimeentry}
          margin="normal"
          variant="outlined"
          sx={{ width: '30vw' }}
        />
        <Typography>Entry Time</Typography>
        <TextField
          type="time"
          id="appt-time-entry"
          name="appt-time-entry"
          value={selectedEntryTime}
          onChange={handleTimeentry}
          margin="normal"
          variant="outlined"
          sx={{ width: '30vw' }}
        />
        <Typography>Exit Date</Typography>
        <TextField
          type="date"
          id="exit-date-entry"
          name="exit-date-entry"
          // value={selectedDate}
          // onChange={handleTimeentry}
          margin="normal"
          variant="outlined"
          sx={{ width: '30vw' }}
        />
        <Typography>Exit Time</Typography>
        <TextField
          type="time"
          id="appt-time-exit"
          name="appt-time-exit"
          value={selectedExitTime}
          onChange={handleTimeexit}
          margin="normal"
          variant="outlined"
          sx={{ width: '30vw' }}
        />
      </form>
      <Stack direction={'row'} justifyContent={'space-evenly'}>
        <FormControl fullWidth>
          <InputLabel id="RoomA">A</InputLabel>
          <Select
            labelId="RoomA"
            id="RoomA"
            value={a}
            label="Age"
            onChange={handleChangeA}
            sx={{ width: '10vw' }}
          >
            <MenuItem id='1' value={1}>A1</MenuItem>
            <MenuItem id='2' value={2}>A2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="RoomB">B</InputLabel>
          <Select
            labelId="RoomB"
            id="RoomB"
            value={b}
            label="Age"
            onChange={handleChangeB}
            sx={{ width: '10vw' }}
          >
            <MenuItem id='3' value={3}>B1</MenuItem>
            <MenuItem id='4' value={4}>B2</MenuItem>
            <MenuItem id='5' value={5}>B3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="RoomC">C</InputLabel>
          <Select
            labelId="RoomC"
            id="RoomC"
            value={c}
            label="Age"
            onChange={handleChangeC}
            sx={{ width: '10vw' }}
          >
            <MenuItem id='6' value={6}>C1</MenuItem>
            <MenuItem id='7' value={7}>C2</MenuItem>
            <MenuItem id='8' value={8}>C3</MenuItem>
            <MenuItem id='9' value={9}>C4</MenuItem>
            <MenuItem id='10' value={10}>C5</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Typography>{`Total Price:${price}`}</Typography>
    </>
  );
};

export default NewRegistration;
