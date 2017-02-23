import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "albumFilter",
  pure: false
})

export class AlbumPipe implements PipeTransform {
  transform(input: Album[], mode, type) {
    var output: Album[] = [];
    if (mode === 'All' || mode === '' && type == ""){
      return input;
    }else if(type === 'genre'){
      for (var i = 0; i<input.length; i++){
        if (input[i].genre == mode){
          output.push(input[i]);
        }
      }
    }else if(type === 'artist'){
      for (var i = 0; i<input.length; i++){
        if (input[i].artist == mode){
          output.push(input[i]);
        }
      }
    }
    return output;
}
}
