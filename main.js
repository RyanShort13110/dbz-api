document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){ // client side fetch for testin'
  let askedForChar = document.querySelector('input').value.toLowerCase()
  let charName = document.querySelector('#charName')
  let charAbout = document.querySelector('#charAbout')
  let charImg = document.querySelector('#charImg')
  fetch(`https://nice-gray-cockroach-garb.cyclic.app/api/${askedForChar}`)
  .then(res => res.json()) // gimme json
  .then(data => {
    console.log(data)
    charName.textContent = data.name
    charAbout.textContent = data.about
    charImg.src = data.pic
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}
