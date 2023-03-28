const splashList = [
"A",
"B", 
"C"
] //write all your splashes here

function loadSplash() {
   let choice = Math.floor(Math.random() * splashList.length) //picks at random a whole number between 0 inclusive and list length exclusive
   document.getElementById("splash").innerHTML = (splashList[choice]);
}

loadSplash()
