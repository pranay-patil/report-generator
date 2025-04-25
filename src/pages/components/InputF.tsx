import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './filmsName';

export default function BasicTextFields() {
  return (
    <Box
    component="form"
    sx={{
      display: 'flex', // 👈 makes children inline
      alignItems: 'center', // optional: vertical alignment
      gap: 2, // space between the fields
      justifyContent: 'center', // optional: center in parent
      flexWrap: 'wrap', // optional: wrap on small screens
      mt: 2,
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
      id="filled-basic"
      label="Enter Name"
      variant="filled"
      placeholder="Name"
    />
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="UserData" />}
    />
  </Box>
  
  );
}




