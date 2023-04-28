const express = require('express')
const app = express()
const cors = require('cors')
const characters = require('./characters')
const PORT = 8000
app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (req, res) => { // listen for specific character names
  const characterName = req.params.character.toLowerCase()
  if(characters[characterName]){
    res.json(characters[characterName])
  }else{
    res.json(characters['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => { // listen on cyclic port or our port, preferrably cyclic ofc
  console.log(`Server listening on port ${PORT}`)
})