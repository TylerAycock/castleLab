const express = require(`express`)
const cors = require(`cors`)
const path = require(`path`)




const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: 'bd21eec9b3944ae2ad8ea506cc9b5983',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


rollbar.log('Hello world!')

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

try {nonExistentFunction ()
} catch(error){
    rollbar.error(error)
    console.error(error)
}

try {newNonExistentFunction ()
} catch(error){
    rollbar.warning(`if you procede on this path there will be consequences`)
}

try {anotherNonExistentFunction ()
} catch(error){
    rollbar.critical('This was a critical mistake...there will be much pain')
}

try {finalNonExistentFunction
} catch(error){
    rollbar.info(`hey i just met you and this is crazy but heres your error log me baby`)
}

app.listen(4000, console.log(`Server running on 4000!`))

// rollbar.critical()
// rollbar.warning()
// rollbar.