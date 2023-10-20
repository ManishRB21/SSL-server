const https = require("https")
const express = require('express')
const path = require("path")
const fs = require("fs")

const app = express()

app.use('/', (req, res)=>{
    res.send('Hello from SSL Server')
})


const sslServer = https.createServer(
{
    key : fs.readFileSync(path.join(__dirname, 'cert', 'client-key.pem')),
    cert : fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),    
},
app
)

sslServer.listen(443, ()=>{
    console.log("secure server on port 443")
})