import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseApiPath = "https://api.themoviedb.org/3"

  constructor(public http:Http) { }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath + "/movie/top_rated?api_key=" + this.getApiKey());
  }

  getUpcomingMovies(){
    return this.http.get(this.baseApiPath + "/movie/upcoming?api_key=" + this.getApiKey());
  }

  getApiKey(): string {
    return "46095fbc73c9062f12d271d968374329";
  }

  //key = 46095fbc73c9062f12d271d968374329

}
