const express = require(`express`)
const cors = require(`cors`)
const path = require(`path`)


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

console.log(__dirname, '../public/index.html') //__dirname points to where we are in our directory 

//this is our base input our ".com"
app.get('/',(req,resp)=>{
    resp.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get(`/castle`, (req,resp)=>{
    resp.status(200).send(`<h1>Welcome to my castle!</h1>`)
})

app.get(`/profile`, (req,resp)=>{
    resp.status(200).sendFile(path.join(__dirname, '../public/profile.html'))
})



app.listen(4000, console.log(`Server running on 4000!`))