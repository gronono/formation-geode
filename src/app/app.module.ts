import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {combineReducers, StoreModule} from '@ngrx/store';
import {runEffects} from "@ngrx/effects";
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {AppComponent } from './app.component';
import { CountPipe} from './shared';
import { FAVORIS_STORE, FavorisActions, FavorisComponent} from './favoris/index';
import { OFFRES_STORE, OffreActions, OffresComponent, OFFRES_PROVIDERS} from './offres/index';

const STORE = Object.assign({},
  FAVORIS_STORE,
  OFFRES_STORE
);

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    FavorisComponent,
    CountPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(compose(storeLogger(), combineReducers)(STORE)),
  ],
  providers: [
    ...OFFRES_PROVIDERS,
    runEffects(FavorisActions, OffreActions),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
