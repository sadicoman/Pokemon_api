import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonByIdOrName(idOrName: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${idOrName}`);
  }
}
