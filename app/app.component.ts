import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
    <div class='container'>
    <album-list
      [displayList] = 'masterAlbumList'
      [genreList] = 'genreSort()'
      [artistList] = 'artistSort()'
    ></album-list>
    </div>
  `
})

export class AppComponent{
  public masterAlbumList: Album[] = [
    new Album('8th','NGT46', 100, 'Jpop'),
    new Album('U-87', 'Eason Chan', 150, 'Cantonpop'),
    new Album('Silent Majority', 'KYZ46', 90, 'Jpop'),
    ];


  genreSort(){
    var genreList : string[] =[];
    for (var i = 0; i < this.masterAlbumList.length; i++){
    genreList.push(this.masterAlbumList[i].genre);
    }
    return genreList;
  }

  artistSort(){
    var artistList : string[] =[];
    for (var i = 0; i < this.masterAlbumList.length; i++){
    artistList.push(this.masterAlbumList[i].artist);
    }
    return artistList;
  }
}
