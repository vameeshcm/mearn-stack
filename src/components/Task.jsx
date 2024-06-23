import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Task = () => {

    var[val,setVal]=useState("_________")

    const react=()=>{
        setVal("REACT")
    }
    const angualar=()=>{
        setVal("ANGULAR")
    }
    const node=()=>{
        setVal("NODE JS")
    }
    useEffect(()=>{
        react();
        // angualar();
        // node();

    },[])
  return (
    <div>
        <Typography>
            <h3>welcome to {val} </h3>
            <Button onClick={react} style={{padding:'10px', color:'white', backgroundColor:'red',margin:'5px'}}>REACT</Button>
            <Button onClick={angualar} style={{padding:'10px', color:'white', backgroundColor:'red',margin:'5px'}}>ANGULAR</Button>
            <Button onClick={node} style={{padding:'10px', color:'white', backgroundColor:'red',margin:'5px'}}>NODE JS</Button>
        </Typography>
    </div>
  )
}

export default Task