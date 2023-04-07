const splashList = [
"Anywhere can be a paradise as long as you have the will to live.",
"Listen to BIPOC voices",
"Feel the vibes of this gal!",
"What the tuna!",
"Support your local LGBTQIA+",
"What the scallop!",
"Support your local abortion clinics",
"First, the park, where we’ll see nice doggies.",
"Protest against bills that harm you and your friends",
"Then embark, and we’ll paint cute froggies.",
"You are loved",
"Does Bowser, Shinji, or Mr. Wolf own this site?",
"You are valid",
"Loss memes are not allowed.",
"You are beautiful",
"Whats with these homies dissing my girl?",
"You are amazing", 
"Legalise poop",
"noelle \"the monster makes my teeth clean\" noelle",
"This cavity hurts so bad"
] //write all your splashes here

function loadSplash() {
   let choice = Math.floor(Math.random() * splashList.length) //picks at random a whole number between 0 inclusive and list length exclusive
   document.getElementById("splash").innerHTML = (splashList[choice]);
}

loadSplash()
