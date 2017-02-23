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
      <album-display
        [album]="albumx"
        (addToBasket)="cart($event)"
        (ordersss)='cartDetails($event)'
      ></album-display>
    </div>
    <div *ngFor='let orderx of orderList'>
      <p>{{orderx[0]}} {{orderx[1]}}</p>
    </div>
    <div>Total= {{total}}</div>
    <button (click)="clear()">Clear Your Cart</button>
  `
})

export class AlbumListComponent{
  @Input() displayList: Album[];
  @Input() genreList : Album[];
  @Input() artistList : Album[];
  public mode: string= "";
  public type: string= "";
  public total: number= 0;
  public orderList: any[] =[];

  sortByGenre(genreChosen){
    this.mode = genreChosen;
    this.type = 'genre';
  }
  sortByArtist(artistChosen){
    this.mode = artistChosen;
    this.type = 'artist';
  }
  cartDetails(orderItem){
    this.orderList.push(orderItem);
  }

  cart(albumToBuy){
      this.total = this.total + albumToBuy;
    }

  clear(){
    this.total=0;
    this.orderList=[];
  }
}
