const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
const about = require('./data/about.json')
const courses = require('./data/courses.json')
app.get('/', (req, res)=>{
    res.send('Freelancing Educare Institute Server is running Sucessfully')
})
//about course
app.get('/about', (req, res)=>{
    res.send(about)
})
//courses
app.get('/courses', (req, res)=>{
    res.send(courses)
})
app.listen(port , ()=>{
    console.log('Freelancing Educare Institute Server is runnign on port', port)
})