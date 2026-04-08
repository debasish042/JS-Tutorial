let heros= ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
console.log(heros[0]);
console.log(heros[1]);
console.log(heros[2]);
console.log(heros[3]);
console.log(heros[4]);
console.log(heros.length);

for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}

for(let hero of heros){
    console.log(hero);
}

let cities= ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];


for(let city of cities){
    console.log(city);
}

for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}