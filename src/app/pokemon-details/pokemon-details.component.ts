import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { Pokemon } from '../shared/Models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | null = null;
  searchQuery: string | number = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  // searchPokemon() {
  //   this.pokemonService.getPokemonByIdOrName(this.searchQuery).subscribe(
  //     data => (this.pokemon = data),
  //     error => console.error('Error:', error)
  //   );
  // }
  searchPokemon() {
    const query =
      typeof this.searchQuery === 'string'
        ? this.searchQuery.toLowerCase()
        : this.searchQuery;
    this.pokemonService.getPokemonByIdOrName(query).subscribe(
      data => this.pokemon = data,
      error => console.error('Error:', error)
    );
  }
}
