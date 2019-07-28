import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public lista_series = new Array<any>();

  constructor(private movieService: MovieService,
    public loading: LoadingService) {}

  ngOnInit() {
    this.loading.present();
    this.movieService.getPopularMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_series = objeto_retorno.results;
        console.log(objeto_retorno);
        this.loading.dismiss();
    }, error => {
      console.log(error);
      this.loading.dismiss();
    }
    
    )
  }

}
