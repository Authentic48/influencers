import React from 'react'

import { FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';



const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner', 
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];





export default function SandBox() {

  
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  
    return (
        <div style={{
            margin: 150,
        }}>
            <h1>
                Hello, World
            </h1>
            <FormControl style={{width:'100%'}}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
    )
}