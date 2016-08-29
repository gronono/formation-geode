import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, FormBuilder} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {combineReducers, StoreModule} from '@ngrx/store';
import {runEffects} from "@ngrx/effects";
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {AppComponent } from './app.component';
import { CountPipe} from './shared';
import { FAVORIS_REDUCER, FavorisActions, FavorisComponent} from './favoris/index';
import { OFFRES_REDUCER, OffreActions, OffresComponent, OffreService, OffreStates} from './offres/index';

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
    OffreService, OffreStates,
    runEffects(FavorisActions, OffreActions),
    FormBuilder
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
