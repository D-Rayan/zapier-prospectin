const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(process.env.PORT || 4000, function () {
    console.log('Example app listening on port ', process.env.PORT || 4000)
})