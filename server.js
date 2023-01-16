const express = require('express')
const app = express()
const PORT = 8000

const characters = {
  'krillin': {
    'name': 'Krillin',
    'mangaName': 'Kuririn',
    'race': 'Human-type Earthling',
    'height': '153 cm (5\'0")',
    'weight': '45 kg (99 lbs)',
    'birthDate': 'October 29, Age 736',
    'deathDates': [
      'May 7, Age 753', 
      'December 24, Age 762', 
      'May 8, Age 774', 
      'Age 790', 
      'Age 821-88'
    ],
    'alliegiance': [
      'Orin Temple (formerly)', 
      'Turtle School (formerly)', 
      'Dragon Team', 
      'Police', 
      'Team Universe 7', 
      'New Turtle School (founder)'
    ]
  },
  'goku': {
    'name': 'Goku, Kakarot',
    'mangaName': 'Son Goku, Kakarot',
    'race': 'Saiyan',
    'height': '175 cm (5\'9") "adult"',
    'weight': '62 kg (137 lbs) "adult"',
    'birthDate': ['Age 737', 'Age 734'],
    'deathDates': ['October 12, Age 761', 
    'May 26, Age 767', 
    'Age 779', 
    'Age 780'
    ],
    'alliegiance': ['Dragon Team', 
    'Turtle School (formerly)', 
    'Team Universe 7', 
    'Galactic Patrol'
    ]
  },
  'vegeta': {
    'name': 'Vegeta',
    'mangaName': 'Vegeta',
    'race': 'Saiyan',
    'height': '164 cm (5\'4")',
    'weight': '56 kg (123 lbs)',
    'birthDate': 'Age 732',
    'deathDates': ['December 24, Age 762', 
    'May 7, Age 774', 
    'June, Age 779', 
    'Age 801', 
    'Age 889'
    ],
    'alliegiance': ['Frieza Force (Formerly)', 
    'Dragon Team', 
    'Organization of Babidi (Formerly)', 
    'Team Universe 7', 
    'Team Universe 6 (baseball only)', 
    'Galactic Patrol'
    ]
  },
  'unknown': 'Unknown character entered.',

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (req, res) => { // listen for specific character names
  const characterName = req.params.character.toLowerCase() //ensure lower case
  if(characters[characterName]){ // if characters name is in the character obj
    res.json(characters[characterName]) // respond with that characters obj
  }else{
    res.json(characters['unknown']) // otherwise show unknown
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})