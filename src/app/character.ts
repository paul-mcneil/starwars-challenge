import { Film } from './film';

export interface Character {
  id: number;
  name: string;
  url: string;
  filmUrls: string[];
  filmsDetails: Film[];
}



