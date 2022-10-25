const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
app.get('/', (req, res)=>{
    res.send('Freelancing Educare Institute Server is running Sucessfully')
})


app.listen(port , ()=>{
    console.log('Freelancing Educare Institute Server is runnign on port', port)
})