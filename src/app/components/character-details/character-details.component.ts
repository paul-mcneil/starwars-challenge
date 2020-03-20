import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../../character.service';
import { Film } from 'src/app/film';
import { FilmDetailsService } from '../../film-details.service';
import { HttpRequest, HttpClient } from '@angular/common/http';
import _ from 'underscore';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.less']
})
export class CharacterDetailsComponent implements OnInit {

  character: Character;
  films: string[];
  movies: Film[] = [];
  charactersList: Character[] = [];
  loading = true;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location,
    private filmDetailsService: FilmDetailsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.charactersList = this.characterService.getCharacters();
    this.getCharacterDetails();
  }
  getCharacterDetails(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.character = _.findWhere(this.charactersList, {id: this.id});
    this.characterService.getCharacterDetails(this.id).subscribe((data: any) => {

      this.films = data.films;
      this.films.forEach(url => {
        this.filmDetailsService.getFilmDetails(url).subscribe((detail: any) => {
          this.movies.push({
            title: detail.title,
            release_date: detail.release_date
          });
        });
      });
    }, err => console.log('getCharacterDetails error'), () => {
      console.log('finished loading data');
      this.loading = false;
    });
  }
}
