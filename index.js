//required scripting 
var readlineSync = require('readline-sync');
var request = require('request');
var fetch = require('node-fetch')

//input- readlinesync query to define users request
var pokemon = readlineSync.question('What Pokemon would you like to query?'); 
console.log('pokemon:', pokemon);
//write a function that loops over our array, and makes an api call. 

function pokemonSearch () {

    fetch(`https://pokeapi.co/api/v2/?pokemon=${pokemon}`)
    .then(response => response.json)
    .then(data => (console.log('data:', data)))
}   

 //output- API call to https://pokeapi.co/ to retrieve a 
    //-list of pokemon names
    //-logs thier types
    let pokemonObj= {
            name: `${pokemonName}`,
            type: `${pokemonType}`
    }
    

 pokemonSearch()
//constraints
    //must be a command line application
    //data must be returned in object form, with {pokemon name: type}

//exceptions