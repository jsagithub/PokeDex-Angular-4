import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemoninfo',
  templateUrl: './pokemoninfo.component.html',
  styleUrls: ['./pokemoninfo.component.css']
})
export class PokemoninfoComponent implements OnInit {

  pokemon: any = [];

  constructor(private ParamsRouter:ActivatedRoute, private pokemonsService: PokemonsService) { 
  	this.ParamsRouter.params.subscribe(params=>{
  			this.pokemon=this.pokemonsService.getPokemon(params['id']);
  		});
  }

  ngOnInit() {
  }

}
