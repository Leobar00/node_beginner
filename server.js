const express = require('express')
let app       = express()
let port      = 3000 

app.all('*', (req, res) => {
    res.send('Hello Node js')
})

app.listen(port, () => {
    console.log('Server disponibile http://localhost:' + port)
})