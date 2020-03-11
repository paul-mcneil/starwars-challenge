import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, of, throwError } from 'rxjs';
import { CHARACTERS } from './character-data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsService {

  constructor(private http: HttpClient) { }

  getFilmDetails(filmUrl: string): Observable<Film> {
    return this.http.get<Film>(filmUrl);
  }
}
