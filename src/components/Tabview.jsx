import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tabadd from './Tabadd'

const Tabview = () => {
  var[users,setUsers]=useState([])
  var[update,setUpdate]=useState(false)
  var[singleValue,setsingleValue]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then((res)=>{
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err=>console.log(err))

  },[])

  const deleteValue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/remove/"+id)
    .then((response)=>{
      alert(response.data)
      window.location.reload(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const updateValues=(val)=>{
    console.log("update")
    setUpdate(true)
    setsingleValue(val)
  }



  return (
    <div>
     var finalJSX = <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="right">_id</TableCell>
            <TableCell align="right">ename</TableCell>
            <TableCell align="right">eage</TableCell>
            <TableCell align="right">eposition</TableCell>
            <TableCell align="right">esalary</TableCell>
            <TableCell>
              <Button> UPDATE</Button> &nbsp;&nbsp;
              <Button>DELETE</Button>&nbsp;&nbsp;
            </TableCell>
              
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((val,i)=>{
          return(
           
              <TableRow>
                <TableCell align="right">{val._id}</TableCell>
            <TableCell align="right">{val.ename}</TableCell>
            <TableCell align="right">{val.eage}</TableCell>
            <TableCell align="right">{val.eposition}</TableCell>
            <TableCell align="right">{val.esalary}</TableCell>
            <TableCell>
              <Button onClick={()=>updateValues(val)}>UPDATE</Button> &nbsp;&nbsp;
              <Button onClick={()=>deleteValue(val._id)}>DELETE</Button>&nbsp;&nbsp;
            </TableCell>
              
          </TableRow>
            
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
    if (update) finalJSX = <Tabadd data ={singleValue} method='put'/>

    
    </div>
  )
}

export default Tabview