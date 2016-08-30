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
import { FAVORIS_STORE, FavorisActions, FavorisComponent, FAVORIS_ROUTES} from './favoris/index';
import { OFFRES_STORE, OffreActions, OffresComponent, OFFRES_PROVIDERS, OFFRES_ROUTES} from './offres/index';
import {RouterModule} from "@angular/router";

const STORE = Object.assign({},
  FAVORIS_STORE,
  OFFRES_STORE
);

const ROUTES = [
  {path: '', redirectTo: '/offre', pathMatch: 'full'},
  ...OFFRES_ROUTES,
  ...FAVORIS_ROUTES
];

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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ...OFFRES_PROVIDERS,
    runEffects(FavorisActions, OffreActions),
    FormBuilder
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
