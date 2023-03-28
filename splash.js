const splashList = [
"Anywhere can be a paradise as long as you have the will to live.",
"Feel the vibes of this gal!",
"What the tuna!",
"What the scallop!",
"First, the park, where we’ll see nice doggies.",
"Then embark, and we’ll paint cute froggies.",
"Does Bowser, Shinji, or Mr. Wolf own this site?",
"Loss memes are not allowed."
] //write all your splashes here

function loadSplash() {
   let choice = Math.floor(Math.random() * splashList.length) //picks at random a whole number between 0 inclusive and list length exclusive
   document.getElementById("splash").innerHTML = (splashList[choice]);
}

loadSplash()
