import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { CharacterService } from 'src/app/character.service';
import { Observable } from 'rxjs';
import { FilmDetailsService } from 'src/app/film-details.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  errorMessage = '';

  constructor(
    private characterService: CharacterService,
    private filmDetailsService: FilmDetailsService
  ) {}

  ngOnInit() {
    this.getCharacterData();
  }

  getCharacterData(): void {
    this.characters = this.characterService.getCharacters();
  }
}
