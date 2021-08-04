let express = require("express")
let app = express()

let port = 8000
app.listen(port, ()=>{
    console.log("Server started on port" + port)
})

app.get('/', (req, res)=>{
    res.send("Authors API")
})

