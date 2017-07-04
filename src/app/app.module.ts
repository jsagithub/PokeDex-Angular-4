import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { PokemonsService } from "./services/pokemons.service";

// Routes
import { POKE_ROUTING } from "./app.routes";

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemoninfoComponent } from './components/pokemoninfo/pokemoninfo.component';
import { SearchpokemonComponent } from './components/searchpokemon/searchpokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonsComponent,
    PokemoninfoComponent,
    SearchpokemonComponent
  ],
  imports: [
    BrowserModule,
    POKE_ROUTING
  ],
  providers: [
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
