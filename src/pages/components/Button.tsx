
import React from 'react'
import Button from '@mui/material/Button';

export default function ButtonM() {
  return (
    <div>
      <button onClick={()=>console.log('click me')}>Add To Cart</button>
      <Button variant="contained">Primary</Button>
    </div>
  )
}


