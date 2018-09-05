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
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { ModalComponent } from './components/modal/modal.component';

export const MATERIAL_IMPORTS = [
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatExpansionModule,
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PodcastsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ...MATERIAL_IMPORTS,
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
