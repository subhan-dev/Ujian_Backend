const express = require('express')

const moviesRouter = require('./routers/moviesRouter')
const categoriesRouter = require('./routers/categoriesRouter')
const movcatRouter = require('./routers/movcatRouter')


const app = express()
const port = 2019

app.use(express.json())
app.use(moviesRouter)
app.use(categoriesRouter)
app.use(movcatRouter)

app.get('/', (req, res) => {
    res.send(`<h1> Selamat datang di my API`)
})

app.listen(port, () => {
    console.log(`Berhasil running di port ${port}`)
})