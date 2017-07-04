import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//services
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-searchpokemon',
  templateUrl: './searchpokemon.component.html',
  styleUrls: ['./searchpokemon.component.css']
})
export class SearchpokemonComponent implements OnInit {

  pokemons: any = [];

  constructor( private _params:ActivatedRoute, private _pokemons:PokemonsService) { 
  	this._params.params.subscribe(params=>{
  			this.pokemons= this._pokemons.searchPokemon(params['name']);
  		});
  }

  ngOnInit() {
  }

}
