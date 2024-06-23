import { Button } from '@mui/material'
import React, { useState } from 'react'

const Addition = () => {
    var[val,setVal]=useState(0)
    var change=()=>{
        setVal(val+1)
    }

    var substract=()=>{
        setVal(val-1)
    }


  return (
    <div>
         THE COUNTER VALUE IS : {val}
         <Button variant='contained' color='primary' onClick={change}> add</Button> &nbsp; 
         <Button variant='contained' color='primary' onClick={substract}> sub</Button> &nbsp; 
    </div>
  )
}

export default Addition