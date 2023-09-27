import  express  from "express";

let students=[
    { id:11,name:'hansha' ,sname:'jangir' ,phone: 1234567896 ,age:22},
    { id:22,  name:'nisha',sname:'jangir' ,phone: 9876543212 , age:21},
]  

const app=express()

app.use(express.json())

///by get//

app.get("/",(req,res)=>{
    res.json(students)
})

//by post//
app.post("/new",(req,res)=>{
    const newUser=req.body;
    students.push(newUser)
    res.status(201).json(students);
})


//by delete//
app.delete("/delete/:id",(req,res)=>{
const id= parseInt(req.params.id);

students=students.filter((user)=>user.id!==id);
res.json({message:`User with the id &{id} deleted`})
})

//by put//
app.post("/")



app.listen(4000,()=>console.log("server started"))

