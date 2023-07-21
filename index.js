const express = require('express')
const dateFormat = require('date-format')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World</h1>')
})

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'karthik_siddhu',
        followers: 120,
        follows: 280,
        date: dateFormat.asString('dd-MM-yyyy hh:mm:ss.SSS', new Date())
    }
    res.status(200).json(instaSocial)
})

app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        username: 'karthik_siddhu',
        followers: 70,
        follows: 130,
        date: dateFormat.asString('dd-MM-yyyy hh:mm:ss.SSS', new Date())
    }
    console.log('facebook')
    res.status(200).json(instaSocial)
})
app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        username: 'karthik_shivaram',
        followers: 600,
        follows: 670,
        date: dateFormat.asString('dd-MM-yyyy hh:mm:ss.SSS', new Date())
    }
    res.status(200).json(instaSocial)
})

app.get('/api/v1/:token', (req, res) => {
    res.status(200).json({param: req.params.token})
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
    console.log('hey')
    console.log('hi')
})