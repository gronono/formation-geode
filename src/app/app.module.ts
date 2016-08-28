import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {combineReducers, Action} from '@ngrx/store';
import { AppComponent } from './app.component';
import {CountPipe} from "./count.pipe";
import {FAVORIS_REDUCER} from './favoris.reducer';
import {OFFRES_REDUCER} from './offres.reducer';
import {FavorisEffects} from './favoris.effects';
import {runEffects} from "@ngrx/effects";

const STORE = {
  offres: OFFRES_REDUCER,
  favoris: FAVORIS_REDUCER
};

@NgModule({
  declarations: [
    AppComponent,
    CountPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StoreModule.provideStore(compose(storeLogger(), combineReducers)(STORE)),
  ],
  providers: [
    runEffects(FavorisEffects)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
