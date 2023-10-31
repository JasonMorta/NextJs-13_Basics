'use client';

import Link from "next/link";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Child1() {
  const [value, setValue] = React.useState(2);
  const style = {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "20px",
  }
  return (
    < >
  
      <div style={style}>
        <h1>Child1</h1>
        <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Link href="/"> back</Link>
      </div>
    

    </>
  )
}
