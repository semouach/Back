const express = require('express')
const port = 8001

const app = express()

app.get('/', (req,res)=> {
    res.send('Authors API')
})