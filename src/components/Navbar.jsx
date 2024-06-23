import { AppBar, Toolbar, colors ,Typography, Button} from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h5'>Employee Details</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color='inherit' variant='contained'> <Link to='/add'>add</Link> </Button>&nbsp;&nbsp;
            <Button color='success' variant='contained'><Link to='/data'>view</Link> </Button>&nbsp;&nbsp;
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar