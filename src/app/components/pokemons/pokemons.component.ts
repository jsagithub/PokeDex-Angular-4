import { Component, OnInit } from '@angular/core';

//Services
import { PokemonsService,PokemonRules } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:PokemonRules[] = [];
  constructor(private _pokemones:PokemonsService) { 

  }

  ngOnInit() {
  	this.pokemons = this._pokemones.getPokemons();
  }

}
