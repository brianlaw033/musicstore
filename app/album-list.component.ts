import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';


@Component({
  selector: 'album-list',
  template: `
  <select (change)="sortByGenre($event.target.value)" class='filter'>
      <option *ngFor='let genMenux of genreList | menuFilter'value={{genMenux}}>{{genMenux}}</option>
  </select>
  <select (change)="sortByArtist($event.target.value)" class='filter'>
      <option *ngFor='let artMenux of artistList | menuFilter'value={{artMenux}}>{{artMenux}}</option>
  </select>
    <div *ngFor='let albumx of displayList | albumFilter:mode:type'>
      <h3>{{albumx.name}}</h3>
      <p>{{albumx.artist}}</p>
      <p>{{albumx.price}}</p>
      <p>{{albumx.genre}}</p>
    </div>
  `
})

export class AlbumListComponent{
  @Input() displayList: Album[];
  @Input() genreList : Album[];
  @Input() artistList : Album[];
  public mode: string= "";
  public type: string= "";
  sortByGenre(genreChosen){
    this.mode = genreChosen;
    this.type = 'genre';
  }
  sortByArtist(artistChosen){
    this.mode = artistChosen;
    this.type = 'artist';
  }

}
