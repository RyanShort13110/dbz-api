const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
  'krillin': {
    'name': 'Krillin',
    'pic': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdeathbattlefanon%2Fimages%2F6%2F66%2FKrillin_by_maffo1989-d8el2w4.png%2Frevision%2Flatest%3Fcb%3D20161025010341&f=1&nofb=1&ipt=9d6ea7c32cdff7c82f9cbeb3b47bb12e3ea286c2291c378188f1cd1a68b21479&ipo=images',
    'about': 'Krillin (クリリン Kuririn) is a supporting protagonist in the Dragon Ball series. He\'s one of the most powerful and talented martial artists on Earth. He is courageous, faithful, and good-natured. Krillin had a brief rivalry with Goku when they first trained under Master Roshi, but they quickly became lifelong best friends, to the point that Goku cares for him as much as his family and closest ones. He is a prominent Z Fighter, despite usually being overpowered by the major enemies. His short stature and baldness (with the exception of when he grows out his hair in the Majin Buu Saga onwards, although he occasionally shaves his head in several sagas in Dragon Ball Super) aid him in his ability to provide comic relief during tense moments. During the latter half of Dragon Ball Z, he largely retires from fighting, opting to settle down with his family instead, becoming the husband of Android 18 and the father of Marron. However, because of all things that occur during the Golden Frieza Saga, he returns to his lifestyle as a warrior later on in Dragon Ball Super.',
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
    'pic': 'http://getdrawings.com/cliparts/goku-clipart-12.png',
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
    'pic': 'https://duckduckgo.com/?q=vegeta&t=newext&atb=v326-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fstatic2.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F02%2FGood-Vegeta-Evil-Vegeta-feature-Image.jpg',
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
    'pic': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.k16bAHpriloOa5UzmSSblAHaJz%26pid%3DApi&f=1&ipt=a81efcab16e415c6db5db4e19b8afd665fa5b98054f1af36e3104b3ffb369190&ipo=images',
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
    'pic': 'https://vignette.wikia.nocookie.net/dragonballfanon/images/d/d6/AnotherPathBulma.png/revision/latest?cb=20190407144610',
    'about': 'Bulma (ブルマ Buruma, lit. "Blooma") is a brilliant scientist and the second daughter of Capsule Corporation\'s founder Dr. Brief and his wife Bikini, the younger sister of Tights, and is Goku\'s first friend. She used to be the girlfriend of Yamcha, but moved on (while remaining friends with him) and, eventually, became the wife of Vegeta, as well as the mother of Trunks and Bulla. A technological and scientific genius who can turn her talents to almost any field and understand alien technology near-effortlessly, her inventions, and the resources of Capsule Corporation, have been invaluable to Goku and the rest of the Dragon Team many times. Her most notable invention is the Dragon Radar. Bulma is the most significant female character in the series. Aside from Goku, Bulma is the single longest-running character in the entire meta-series, being introduced in the first Dragon Ball chapter and episode and maintaining a prominent role until the end of the series.',
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
    'pic': 'https://img1.wikia.nocookie.net/__cb20111124052312/dragonballupdates/images/3/34/PiccoloAndroidsSaga.png',
    'about': 'Piccolo Jr. (ピッコロ・ジュニア Pikkoro Junia, lit. "Piccolo Junior"), usually just called Piccolo and also known as Ma Junior (マジュニア Ma Junia), is a Namekian and also the final child and reincarnation of King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami, at which point he was once referred to as Kamiccolo by Goku. According to Grand Elder Guru, Piccolo, along with Kami and King Piccolo, are part of the Dragon Clan, who were the original creators of the Dragon Balls. A wise and cunning warrior, he was the main antagonist in the final saga of Dragon Ball, the Piccolo Jr. Saga, and was thus a ruthless enemy of Goku. However, starting with the first saga of Dragon Ball Z, the Raditz Saga, he began to lose all villainous traits, and when he started training Goku\'s son Gohan during the Vegeta Saga which led to the two developing a strong bond with each other, he became a permanent member of the Dragon Team and eventually one of Earth\'s greatest heroes.',
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
    'about': 'Son Gohan (孫悟飯 Son Gohan) is a half-breed Saiyan and one of the most prominent characters in the Dragon Ball series. He is the elder son of the series\' primary protagonist Goku and his wife Chi-Chi, the older brother of Goten, the husband of Videl and father to Pan. He is named after Goku\'s adoptive grandfather, Gohan. Unlike his father, Gohan lacks a passion for fighting (although, he does possess a strong power within him) and prefers to do so only when his loved ones are threatened. Nevertheless, Gohan fights alongside the Dragon Team in the defense of Earth for much of his life.',
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
    'about': 'Raditz (ラディッツ Radittsu), also known as "Raditz the Runt", is a mid-class Saiyan warrior, the biological brother of Goku and the eldest son of Bardock and Gine. He is one of the few remaining full-blooded Saiyans left alive after his homeworld was destroyed. He seeks out Goku in order to recruit him into the Frieza Force to aid in conquering planets. Raditz is the main antagonist of the Raditz Saga, and the first antagonist in Dragon Ball Z.',
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
  'king kai': {
    'name': 'King Kai, North Kai',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/6/61/KingKaiNV.png/revision/latest/scale-to-width-down/350?cb=20200219185209',
    'about': 'King Kai (界王様 Kaiō-sama, lit. "King of Worlds") is the North Kai (北の界王 Kita no Kaiō, lit. "North King of Worlds") and king of Universe 7\'s North Area. A comedy lover and brilliant mentor, he acts as Goku\'s Martial Arts teacher and instructs him in using the Kaio-ken and the Spirit Bomb. He later teaches Krillin, Yamcha, Tien Shinhan, Piccolo, and Chiaotzu and continues to act as a major supporting character throughout the majority of the series.',
    'race': 'Core Person',
    'height': 'Over 4 m',
    'weight': 'Unknown',
    'birthDate': 'Unknown',
    'deathDates': ['May 26, Age 767'
    ],
    'alliegiance': ['Dragon Team (Support)',
      'Time Patrol'
    ]
  },
  'yamcha': {
    'name': 'Yamcha',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/5/59/Yamcha_DB_Episode_138.png/revision/latest/scale-to-width-down/236?cb=20210904213322',
    'about': 'Yamcha (ヤムチャ Yamucha) is a major deuteragonist in the Dragon Ball manga and in the anime Dragon Ball, and later a supporting tritagonist in Dragon Ball Z and Dragon Ball Super, with a few appearances in Dragon Ball GT. He is a former boyfriend of Bulma and the lifelong best friend of Puar. A former desert bandit, Yamcha was once an enemy of Goku, but quickly reformed and became a friend and ally. Brave, boastful and dependable, Yamcha is a very talented martial artist and one of the most powerful humans on Earth, possessing skills and traits that allow him to fight alongside his fellow Z Fighters when major threats loom. Although he retired by the latter half of Dragon Ball Z, due to being largely outclassed by both his allies (namely the Saiyans) and their enemies, he is always present whenever a new threat approaches, and will occasionally lend a helping hand, thus proving himself to be a powerful ally in his own right',
    'race': 'Human-type Earthling',
    'height': '183 cm (6\'0")',
    'weight': '68 kg (150 lbs)',
    'birthDate': 'March 20, Age 733',
    'deathDates': ['November 3, Age 762',
      'May 8, Age 774',
      'Age 779'
    ],
    'alliegiance': ['Dragon Team',
      'Turtle School (formerly)',
      'Taitans',
      'Team Universe 7 (baseball only)',
      'Galactic Patrol'
    ]
  },
  'tien': {
    'name': 'Tien Shinhan',
    'pic': 'https://static.wikia.nocookie.net/dragonball/images/e/e2/Tien_DBZ_Episode_152.png/revision/latest/scale-to-width-down/276?cb=20221127060114',
    'about': 'Tien Shinhan (天津飯 or 天津飯 Tenshinhan) is a disciplined, reclusive and heavily devoted martial artist, and one of the strongest Earthlings within the Dragon Ball universe. He also possesses a few non-human traits due to being descended from the alien Triclops race. He was originally a student of the Crane School who desired revenge against Goku for defeating his mentor, Mercenary Tao, but realized he was on the wrong side with the help of Master Roshi. He battles alongside the other Z Fighters against major threats to the Earth, often courageously engaging enemies far more powerful than himself. However, he spends most of his time training with his lifelong best friend, Chiaotzu. ',
    'race': 'Human-type Earthling / Triclops ',
    'height': '187 cm (6\'2")',
    'weight': '75 kg (165 lbs)',
    'birthDate': 'Age 733[',
    'deathDates': ['November 3, Age 762',
      'May 8, Age 774',
      'Age 821-889'
    ],
    'alliegiance': ['Crane School (formerly)',
      'Dragon Team',
      'New Crane School',
      'Tien-Shin Style Dojo',
      'Team Universe 7',
      'Galactic Patrol'
    ]
  },
  'unknown': 'Unknown character entered.'

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

app.listen(process.env.PORT || PORT, () => { // listen on predefined cyclic port or our own port, preferrably cyclic
  console.log(`Server listening on port ${PORT}`)
})