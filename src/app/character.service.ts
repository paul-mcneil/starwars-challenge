import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, of, throwError } from 'rxjs';
import { CHARACTERS } from './character-data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public character: Character;
  constructor(private http: HttpClient) { }

  getCharacters() {

    return CHARACTERS;
  }

  getCharacterDetails(id: number): Observable<Character> {
    const url = `https://swapi.co/api/people/${id}`;
    return this.http.get<Character>(url);

  }

  // getCharacterFilmUrls(characterUrl: string): string[] {
  //   return this.http.get(url).pipe(

  //   )


  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }
  // getCharacter(id: number): Observable<Character> {
  //   return of(CHARACTERS.find(char => char.id === id));
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // private handleError(err: HttpErrorResponse) {
  //   let errorMessage = '';

  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = 'Error occured ${err.error.message}';
  //   } else {
  //     errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
  //   }

  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}


