import { MovieService } from '../movie.service';
import { LoadingService } from '../loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private movieService: MovieService,
    public loading: LoadingService) {}

    public lancamentos = new Array<any>();

  ngOnInit() {
    this.loading.present();
    this.movieService.getUpcomingMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lancamentos = objeto_retorno.results;
        console.log(objeto_retorno);
        this.loading.dismiss();
    }, error => {
      console.log(error);
      this.loading.dismiss();
    }
    
    )
  }

}
