import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumListComponent } from './album-list.component';
import { MenuPipe } from './menu-pipe.component';
import { AlbumPipe } from './album-pipe.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumListComponent,
    MenuPipe,
    AlbumPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
