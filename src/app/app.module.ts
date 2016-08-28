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
import { FAVORIS_REDUCER, FavorisEffects, FavorisComponent} from './favoris/index';
import { OFFRES_REDUCER, Offreeffects, OffresComponent} from './offres/index';

const STORE = {
  offres: OFFRES_REDUCER,
  favoris: FAVORIS_REDUCER
};

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
    runEffects(FavorisEffects, Offreeffects)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
