import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { RacineComponent } from './racine/racine.component';

@NgModule({
  declarations: [
    AppComponent,
    ListKittenComponent,
    CreateKittenComponent,
    UserKittenComponent,
    RacineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
