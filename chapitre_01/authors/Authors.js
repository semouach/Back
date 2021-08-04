
// Installation
let express = require("express")
let port = 8000

let app = express()







// Tableau

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
// for (let i = 0; i < authors.length; i++) {
    //     const element = authors[i];
    //     res.send(element)
    // }


    
// authors
app.get('/authors/1/', (req, res)=>{
    res.send(`${authors[0].name},${authors[0].nationality} `)
})

app.get('/authors/2/', (req, res)=>{
    res.send(`${authors[1].name},${authors[1].nationality} `)
})

app.get('/authors/3/', (req, res)=>{
    res.send(`${authors[2].name},${authors[2].nationality} `)
})

app.get('/authors/4/', (req, res)=>{
    res.send(`${authors[3].name},${authors[3].nationality} `)
})



// Run server
app.listen(port, ()=>{
    console.log("Server started on port" + port)
})
