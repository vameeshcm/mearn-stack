import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[input,setInput]=useState(["ict"])
    var[data,setData]=useState("")
    const change=(e)=>{
        setData(e.target.value)
        
        
    }

    const printRes=()=>{
        setInput([...input,data])
        console.log(input)
        setData("")
    }

  return (
    <div>
        
        <br /><br /><br /><br />
        <TextField id="outlined-basic" label="enter your name" variant="outlined" onChange={change} value={data}/> &nbsp;&nbsp; <br /><br />
        <Button onClick={printRes} style={{padding:'5px', marginTop:'10px'}}>ADD</Button>
        <br /><br /><br /><br />
        <ul>
            {input.map((v,i)=>
            {
                return <li>{v}</li>
            })}
        </ul>
        

            
       
    </div>
  )
}

export default Listmap