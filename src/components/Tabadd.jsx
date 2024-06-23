// import { Button, TextField, Typography } from '@mui/material'
// import React from 'react'

// const Tabadd = () => {
//   return (
//     <div>
//         <Typography variant='h4'>Add Employee Details</Typography>
//         <TextField id="outlined-basic" label="name" variant="outlined" /><br /><br /><br />
//         <TextField id="outlined-basic" label="age" type='number' variant="outlined" /><br /><br /><br />
//         <TextField id="outlined-basic" label="position"  variant="outlined" /><br /><br /><br />
//         <TextField id="outlined-basic" label="salary" type='number' variant="outlined" /><br /><br /><br />
//         <Button variant='contained'>submit</Button>
//     </div>
//   )
// }

// export default Tabadd
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Tabadd = (props) => {
    var navigate = useNavigate()
    var [inputs, setInputs] = useState(props.data)
    console.log("props data:",props.data)
    console.log("props method:",props.method)
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputs((prevData) => ({ ...prevData, [name]: value }))
        console.log(inputs)
    }
    const addHandler = () => {
        console.log("button clicked");
        if(props.method==="post"){
        axios.post("http://localhost:3005/create", inputs)
            .then((response) => {
                console.log(response.data)
                alert(response.data)
                navigate('/')
            })
            .catch((err) => console.log(err))
        }

        if (props.method==="put"){
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            alert("Data Updated")
            navigate('/add');
            setTimeout(() => {
                navigate('/');
            }, 10);
        }
    }
    return (
        <div style={{ paddingTop: "80px" }}>
            <Typography variant='h4'>
                Add Employee Form
            </Typography>
            <br /><br />
            <TextField
                label='Employee Name'
                variant='outlined'
                name='ename'
                value={inputs.ename}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField label='Employee Age'
                variant='outlined'
                name='eage'
                value={inputs.eage}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Employee Position'
                variant='outlined'
                name='eposition'
                value={inputs.eposition}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Employee Salary'
                variant='outlined'
                name='esalary'
                value={inputs.esalary}
                onChange={inputHandler}
            />
            <br /><br />
            <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button>

        </div>
    )
}

export default Tabadd