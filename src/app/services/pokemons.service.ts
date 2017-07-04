import { Injectable } from '@angular/core';

export interface PokemonRules{
  id:number;
  name:string;
  image:string;
  type:string;
  bio:string;
}

@Injectable()
export class PokemonsService {

  pokemons:PokemonRules [] = [
		{
			"id":0,
			"name":"Bulbasaur",
			"image":"001.png",
			"type":"Planta",
			"bio":"Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol."
		},
		{
			"id":1,
			"name":"Charmander",
			"image":"002.png",
			"type":"Fuego",
			"bio":"La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."
		},
		{
			"id":2,
			"name":"Squirtle",
			"image":"003.png",
			"type":"Agua",
			"bio":"El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad."
		},
		{
			"id":3,
			"name":"Pikachu",
			"image":"004.png",
			"type":"Elétrico",
			"bio":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
		}
	];

	getPokemons()
	{
		return this.pokemons;
	}

	getPokemon(id:number)
	{
		let pokeArr = [];
		for (let pokemon of this.pokemons){
			if(pokemon.id == id){
				pokeArr.push(pokemon);
			}
		}

		return pokeArr;
	}

	searchPokemon(searchvalue:string){
		let pokeArr = [];
		searchvalue = searchvalue.toLowerCase();
		for(let pokemon of this.pokemons){
			let name = pokemon.name.toLowerCase();
			if(name.indexOf(searchvalue) >= 0){
				pokeArr.push(pokemon)
			}
		}

		return pokeArr;
	}

  constructor() { }
}
