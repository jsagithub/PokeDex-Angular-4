import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemoninfoComponent } from './components/pokemoninfo/pokemoninfo.component';
import { SearchpokemonComponent } from './components/searchpokemon/searchpokemon.component';


const routes:Routes = [	
	{ path: 'home', component: HomeComponent },
	{ path: 'pokemons', component: PokemonsComponent },
	{ path: 'pokemon/:id', component: PokemoninfoComponent },
	{ path: 'searchpokemon/:name', component: SearchpokemonComponent },
	{ path: '**', redirectTo: "home" }
	
];

export const POKE_ROUTING = RouterModule.forRoot(routes);