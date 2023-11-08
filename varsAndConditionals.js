/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Pikachu and
    Onix.
*/ 

let pikachuAttack = 25
let onixAttack = 35

if(pikachuAttack > onixAttack){
    console.log("Pikachu has a higher attack than Onix.")
} else if(onixAttack > pikachuAttack){
    console.log("Onix has a higher attack than Pikachu.")
}else {
    console.log("It appears that they are evenly matched!")
}

let pikachuHealth = 100
let pikachuDefense = 0

if(pikachuHealth <= onixAttack){
    console.log("Pikachu has fainted.")
} else {
    //pikachuHealth = pikachuHealth - onixAttack
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

pikachuDefense += 25

