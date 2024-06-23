const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://vameeshcm:vamu@cluster0.bcvv4u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let mongoSchema=mongoose.Schema


const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel=mongoose.model("employeee",EmployeeSchema)
module.exports= employeeModel

                              





