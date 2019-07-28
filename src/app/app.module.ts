import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedPageModule } from './feed/feed.module';
import { IntroPageModule } from './intro/intro.module';
import { HttpModule } from '@angular/http'
import { LoadingService } from './loading.service';
import { DetalhesPageModule } from './detalhes/detalhes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FeedPageModule, IntroPageModule, HttpModule, DetalhesPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
