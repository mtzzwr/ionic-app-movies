import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { error } from '@angular/compiler/src/util';
import { LoadingController, NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MovieService
  ]
})
export class FeedPage implements OnInit {


  public lista_filmes = new Array<any>();

  constructor(private movieService: MovieService,
    public loadingController: LoadingController,
    public loading: LoadingService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.carregarFilmes();
  }

  ngAfterViewInit(){

  }

  public event;
  public isEvented : boolean = false;

  doRefresh(event) {
    this.event = event;
    this.isEvented = true;
    this.carregarFilmes();
  }

  carregarFilmes(){
    this.loading.present();
    this.movieService.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
        this.loading.dismiss();
        if(this.isEvented){
          this.event.target.complete();
          this.isEvented = false;
        }
      }, error => {
        console.log(error);
        this.loading.dismiss();
      }

    )
  }

  abrirDetalhes(filme){
    console.log(filme)
    this.navCtrl.navigateForward('/detalhes');
  }

}
