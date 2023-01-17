const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
  'krillin': {
    'name': 'Krillin',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/5/54/Krillin_DB_Episode_134.png/revision/latest/scale-to-width-down/344?cb=20220114045158',
    'about': 'Krillin (クリリン Kuririn) is a supporting protagonist in the Dragon Ball series. He\'s one of the most powerful and talented martial artists on Earth. He is courageous, faithful, and good-natured. Krillin had a brief rivalry with Goku when they first trained under Master Roshi, but they quickly became lifelong best friends, to the point that Goku cares for him as much as his family and closest ones. He is a prominent Z Fighter, despite usually being overpowered by the major enemies. His short stature and baldness (with the exception of when he grows out his hair in the Majin Buu Saga onwards, although he occasionally shaves his head in several sagas in Dragon Ball Super) aid him in his ability to provide comic relief during tense moments. During the latter half of Dragon Ball Z, he largely retires from fighting, opting to settle down with his family instead, becoming the husband of Android 18 and the father of Marron. However, because of all things that occur during the Golden Frieza Saga, he returns to his lifestyle as a warrior later on in Dragon Ball Super. ',
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
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/b/ba/Goku_anime_profile.png/revision/latest/scale-to-width-down/252?cb=20220825041430',
    'about': 'Son Goku (孫悟空 Son Gokū), born Kakarot (カカロット Kakarotto), is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. Originally sent to Earth as an infant, Kakarot would be adopted by Grandpa Gohan who named him Son Goku. A head injury at an early age alters Goku\'s memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth\'s greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.',
    'race': 'Saiyan',
    'height': '175 cm (5\'9")',
    'weight': '62 kg (137 lbs)',
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
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/9/94/Vegeta_anime_profile.png/revision/latest/scale-to-width-down/308?cb=20220825132119',
    'about': 'Vegeta (ベジータ Bejīta), more specifically Vegeta IV (ベジータ四世 Bejīta Yonsei) recognized as Prince Vegeta (ベジータ王子 Bejīta Ōji) is the prince of the fallen Saiyan race and the husband of Bulma, the father of Trunks and Bulla, the eldest son of King Vegeta, as well as one of the main characters of the Dragon Ball series. Regal, egotistical, and full of pride, Vegeta was once a ruthless, cold-blooded warrior and outright killer, but later abandons his role in the Frieza Force, instead opting to remain and live on Earth. He would later repeatedly fight alongside Universe 7\'s most powerful warriors in order to protect Earth and his family, as well as to surpass Goku in power. Vegeta\'s character development is the most praised and one of the biggest in the series. He started off serving as the main antagonist of the Vegeta Saga, but then as an anti-heroic tritagonist throughout the rest of Dragon Ball Z. After the Majin Buu Saga Vegeta would evolve into a hero as the main deuteragonist/secondary protagonist of the sequel series, Dragon Ball Super.',
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
  'trunks': {
    'name': 'Trunks Brief',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/7/74/Trunks_anime_profile.jpg/revision/latest?cb=20221003030555',
    'about': 'Trunks (トランクス Torankusu) is a Human-type Earthling/Saiyan hybrid, the firstborn child and only son of Vegeta and Bulma and the older brother of Bulla.',
    'race': '1/2 Saiyan - 1/2 Human-type Earthling',
    'height': '129 cm (4\'2")',
    'weight': '30 kg (66 lbs)',
    'birthDate': 'Age 766',
    'deathDates': ['May 8, Age 774',
      'Age 779'
    ],
    'alliegiance': ['Capsule Corporation (Family Business)',
      'Dragon Team (Age 774 - 790)',
      'MIR',
      'Kikoukenjutsu Sword School (Age 805)',
      'Team Universe 7 (baseball only)'
    ]
  },
  'bulma': {
    'name': 'Bulma Brief',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/e/eb/Bulma_-_Blood_Rubies_-_000.png/revision/latest/scale-to-width-down/314?cb=20191109020452',
    'about': 'Bulma (ブルマ Buruma, lit. "Blooma") is a brilliant scientist and the second daughter of Capsule Corporation\'s founder Dr. Brief and his wife Bikini, the younger sister of Tights, and is Goku\'s first friend. She used to be the girlfriend of Yamcha, but moved on (while remaining friends with him) and, eventually, became the wife of Vegeta, as well as the mother of Trunks and Bulla. A technological and scientific genius who can turn her talents to almost any field and understand alien technology near-effortlessly, her inventions, and the resources of Capsule Corporation, have been invaluable to Goku and the rest of the Dragon Team many times. Her most notable invention is the Dragon Radar. Bulma is the most significant female character in the series. Aside from Goku, Bulma is the single longest-running character in the entire meta-series, being introduced in the first Dragon Ball chapter and episode and maintaining a prominent role until the end of the series. ',
    'race': 'Human-type Earthling',
    'height': '165 cm (5\'5")',
    'weight': '50 kg (110 lbs)',
    'birthDate': 'August 18, Age 733',
    'deathDates': ['May 8, Age 774',
      'Age 779',
      'Post-Age 820'
    ],
    'alliegiance': ['Capsule Corporation',
      'Dragon Team',
      'Galactic Patrol'
    ]
  },
  'piccolo': {
    'name': 'Piccolo',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/c/c2/Piccolomanga.png/revision/latest/scale-to-width-down/296?cb=20160826150304',
    'about': 'Piccolo Jr. (ピッコロ・ジュニア Pikkoro Junia, lit. "Piccolo Junior"), usually just called Piccolo and also known as Ma Junior (マジュニア Ma Junia), is a Namekian and also the final child and reincarnation of King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami, at which point he was once referred to as Kamiccolo by Goku. According to Grand Elder Guru, Piccolo, along with Kami and King Piccolo, are part of the Dragon Clan, who were the original creators of the Dragon Balls. A wise and cunning warrior, he was the main antagonist in the final saga of Dragon Ball, the Piccolo Jr. Saga, and was thus a ruthless enemy of Goku. However, starting with the first saga of Dragon Ball Z, the Raditz Saga, he began to lose all villainous traits, and when he started training Goku\'s son Gohan during the Vegeta Saga which led to the two developing a strong bond with each other, he became a permanent member of the Dragon Team and eventually one of Earth\'s greatest heroes. ',
    'race': 'Demonic Namekian',
    'height': '226 cm (7\'5")',
    'weight': '116 kg (255 lbs',
    'birthDate': 'May 9, Age 753',
    'deathDates': ['November 3, Age 762',
      'May 8, Age 774',
      'Age 779',
      'Age 789'
    ],
    'alliegiance': ['King Piccolo\'s Demon Clan (formerly)',
    'Dragon Team',
    'Team Universe 7',
    'Galactic Patrol',
    'Red Ribbon Army (temporarily; undercover)'
    ]
  },
  'gohan': {
    'name': 'Gohan',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/d/d7/Gohan_anime_profile_2.png/revision/latest/scale-to-width-down/239?cb=20220825041045',
    'about': 'Son Gohan (孫悟飯 Son Gohan) is a half-breed Saiyan and one of the most prominent characters in the Dragon Ball series. He is the elder son of the series\' primary protagonist Goku and his wife Chi-Chi, the older brother of Goten, the husband of Videl and father to Pan. He is named after Goku\'s adoptive grandfather, Gohan. Unlike his father, Gohan lacks a passion for fighting (although, he does possess a strong power within him) and prefers to do so only when his loved ones are threatened. Nevertheless, Gohan fights alongside the Dragon Team in the defense of Earth for much of his life. ',
    'race': '1/2 Saiyan-1/2 Human-type Earthling',
    'height': '176 cm (5\'9")',
    'weight': '61 kg (134 lbs)',
    'birthDate': 'May 18, Age 757',
    'deathDates': ['May 8, Age 774'
    ],
    'alliegiance': ['Dragon Team',
      'Saiya Squad (as Great Saiyaman)',
      'Team Universe 7',
      'Galactic Patrol'
    ]
  },
  'goten': {
    'name': 'Goten',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/5/5a/Goten_Teenager.jpg/revision/latest/scale-to-width-down/231?cb=20220920183551',
    'about': 'Son Goten (孫悟天 Son Goten) is the youngest son of Goku and his wife Chi-Chi, making him a Saiyan and Earthling hybrid. Goten is Gohan\'s younger brother and Trunks\' best friend.',
    'race': '1/2 Saiyan-1/2 Human-type Earthling',
    'height': '123 cm (4\'0")',
    'weight': '26 kg (57 lbs)',
    'birthDate': 'Age 767',
    'deathDates': ['May 8, Age 774',
      'Age 779'
    ],
    'alliegiance': ['Dragon Team (Age 774 - Age 790)',
      'MIR',
      'Kikoukenjutsu Sword School',
      'Team Universe 6 (baseball only)'
    ]
  },
  'raditz': {
    'name': 'Raditz',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/9/93/Raditz_stitch.png/revision/latest/scale-to-width-down/242?cb=20211020204925',
    'about': 'Raditz (ラディッツ Radittsu), also known as "Raditz the Runt", is a mid-class Saiyan warrior, the biological brother of Goku and the eldest son of Bardock and Gine. He is one of the few remaining full-blooded Saiyans left alive after his homeworld was destroyed. He seeks out Goku in order to recruit him into the Frieza Force to aid in conquering planets. Raditz is the main antagonist of the Raditz Saga, and the first antagonist in Dragon Ball Z. ',
    'race': 'Saiyan',
    'height': 'Unknown',
    'weight': 'Unknown',
    'birthDate': 'Unknown',
    'deathDates': ['October 12th, Age 761 (revived in Age 763)',
    'Age 790'
    ],
    'alliegiance': [
      'Frieza Force (Saiyan Army, until Age 737; directly under Frieza afterwards)',
      'Dragon Team'
    ]
  },
  'chi-chi': {
    'name': 'Chi-Chi',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/e/e2/Chi-Chi_DBZ_Ep_04_001.png/revision/latest/scale-to-width-down/350?cb=20201226004235',
    'about': 'Chi-Chi (チチ Chichi) is the princess of Fire Mountain and the daughter of the Ox-King. She later marries Goku and becomes the loving mother of Gohan and Goten. She was first introduced as a shy and fearful girl, but later, as she gets older, develops a very tomboyish, tough and fierce personality, which sometimes causes her to have angry outbursts seen several times throughout the series. Despite this, she has shown her love for Goku and their sons many times throughout the series.',
    'race': 'Human-type Earthling',
    'height': '163 cm (5\'4")',
    'weight': '51 kg (112 lbs)',
    'birthDate': 'November 5, Age 737',
    'deathDates': ['May 8, Age 774',
    'Age 779'
    ],
    'alliegiance': ['Dragon Team'
    ]
  },
  'ox king': {
    'name': 'Ox King',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/5/5b/Ox-KingPresentsEp05.png/revision/latest/scale-to-width-down/345?cb=20120531182050',
    'about': 'Ox-King, also referred to as Ox Demon King (牛魔王 Gyūmaō) when his castle was engulfed in flames, is the king of Fire Mountain, as well as the father of Chi-Chi, the father in-law of Goku, the grandfather of Gohan and Goten, and the great grandfather of Pan. He once trained with Goku\'s adoptive grandfather, Grandpa Gohan, under Master Roshi at the Turtle School.',
    'race': 'Human-type Earthling',
    'height': 'Over 4 m',
    'weight': 'Unknown',
    'birthDate': 'May 6th',
    'deathDates': ['May 8, Age 774'
    ],
    'alliegiance': ['Turtle School',
      'Dragon Team'
    ]
  },
  'unknown': 'Unknown character entered.',

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (req, res) => { // listen for specific character names
  const characterName = req.params.character.toLowerCase() //ensure lower case
  if(characters[characterName]){ // if characters name is in the big character obj
    res.json(characters[characterName]) // respond with that characters obj
  }else{
    res.json(characters['unknown']) // otherwise show unknown
  }
})

app.listen(process.env.PORT || PORT, () => { // listen on predefined cyclic port OR 8000
  console.log(`Server listening on port ${PORT}`)
})