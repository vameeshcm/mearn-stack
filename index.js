//1. import the express
const express = require('express')
const employeeModel=require('./model')
const cors=require('cors')

//2.initialization
const app=new express()



//middleware|| parsing the parameters

app.use( express.urlencoded({extended:true}))
app.use( express.json())
app.use(cors());

//3.api creation

app.get('/',(req,res)=>{
    res.send("the message from backend")
})
//trial api
app.get('/trial',(req,res)=>{
    res.send("this is a trial message")
})

app.post('/trial',(req,res)=>{
    res.send("this is a not a trial message")
})

app.post('/create',async(req,res)=>{
    var result= await( new employeeModel(req.body))
    result.save()
    res.send("data added")
})

app.get('/view',async(req,res)=>{
    var data= await employeeModel.find()
    res.json(data)
    console.log(data)
})


app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("deleted")
})

app.put('/edit/:id',async(req,res)=>{
    let id= req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")
}) 


//4.port

app.listen(3005,()=>{
    console.log("port 3005 is running")
})


