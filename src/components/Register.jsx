import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <h2>Signup</h2>
        <TextField id="outlined-basic" label="Address" variant="outlined" /> <br /><br />
        <TextField id="filled-basic" label="Filled" variant="filled" /><br /><br />
        <TextField id="standard-basic" label="Standard" variant="standard" /><br /><br />
        <Button variant="outlined">Submit</Button>
        <Button variant="outlined">Reset</Button>
    </div>
  )
}

export default Register