import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [fname,setFname] = useState("akash")
    var [val,setVal]=useState()

    const onExchange=(e)=>{
        // console.log(e.target.value)
        setVal(e.target.value)
    }



    const change=()=>{
        setFname(val)
    }



  return (
    <div>
      
      Welcome {fname}
      <Button variant='contained' color='primary' onClick={change}> CHANGE</Button> &nbsp; <br /><br /> <br /><br /><br />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={onExchange} /> <br /><br /><br />
      YOU HAVE TYPED:{fname}
      
    </div>
  )
}

export default State