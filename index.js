const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
const about = require('./data/about.json')
const courses = require('./data/courses.json')
const coursesDetails = require('./data/courseDetails.json')
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
//courses details
app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const details = coursesDetails.find((details) => details.category_id == id)
    res.send(details)
})
//checkout
app.get('/checkout/:id', (req, res)=>{
    const id = req.params.id;
    const checkout = coursesDetails.find(cart => cart.category_id == id)
    res.send(checkout)
})
app.listen(port , ()=>{
    console.log('Freelancing Educare Institute Server is runnign on port', port)
})