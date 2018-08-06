import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';

export const MATERIAL_IMPORTS = [
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PodcastsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ...MATERIAL_IMPORTS,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
