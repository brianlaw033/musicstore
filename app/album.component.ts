import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
declare var jQuery: any;

@Component({
  selector: 'album-display',
  template: `
  <div>
    <h3>{{album.name}}</h3>
    <p>{{album.artist}}</p>
    <p>{{album.price}}</p>
    <p>{{album.genre}}</p>
    <input #addOrder placeholder='Place your order here'>
    <button (click)="
        orderItem(album.name, addOrder.value);
        newOrder(addOrder.value, album.price);
        addOrder.value='';
      ">Add to Cart</button>
  </div>
  `
})
export class AlbumComponent {
  public basket: Album[] =[];

  @Input() album: Album[];
  @Output() addToBasket = new EventEmitter();
  @Output() ordersss = new EventEmitter();
  newOrder(quantity, price){
    var totalForThisAlbum: number = quantity*price;
    this.addToBasket.emit(totalForThisAlbum);
  }
  orderItem(name, quantity){
    var orderArray: any[] = [];
    orderArray.push(name);
    orderArray.push(quantity);
    this.ordersss.emit(orderArray);
  }
  // add(albumsss){
  //   this.basket.push(albumsss);
  //   this.addToBasket.emit(this.basket);
  // }
  // putItDown(albumsss){
  //   this.basket = jQuery.grep(this.basket, function(value){
  //     return value != albumsss
  //   });
  //     this.addToBasket.emit(this.basket);
  // }

}
