const express = require('express')
const app = express()
const port = 8000
app.use(express.json())
//Routes
let students = [{name: "a"},
                {name: "b"},
                {name: "c"},
                {name: "d"},
                {name: "e"}]

app.get('/',(req,res) => {
    res.send('form simple')
})

app.post('/students',(req,res)=>{
    
   console.log(req.body);
})










app.listen(port,()=>{
    console.log(`server starded on port: ${port}`);
})