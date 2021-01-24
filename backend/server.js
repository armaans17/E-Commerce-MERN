const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
    res.send('APi')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(pro => pro._id === req.params.id)
    res.json(product)
})

app.get('/', (req, res) => {
    res.send('APi')
})


app.listen(5000, () => {
    console.log('server running')
})