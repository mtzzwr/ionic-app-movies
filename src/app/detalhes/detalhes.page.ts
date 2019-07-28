import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  constructor(public nav : NavParams) { }

  ngOnInit() {
    this.filmeId = this.nav.get("id");
  }

  public filme;
  public filmeId;

}
