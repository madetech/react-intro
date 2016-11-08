const express = require('express')
const request = require('request')

const app = express()

app.get('/api/random.json', function (req, res) {
  request('https://random-movie.herokuapp.com/random', function (err, response, body) {
    res.header('Access-Control-Allow-Origin', '*')
    res.json(JSON.parse(body))
  })
})

app.listen(3000, () => console.log('Listening on port 3000'))
