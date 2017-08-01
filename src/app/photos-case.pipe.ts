import { Pipe, PipeTransform } from '@angular/core';

import { PhotosComponent } from './photos/photos.component'; 

@Pipe({
    name: 'photosCase'
})
export class PhotosCasePipe implements PipeTransform {

    transform(photos: any, term: any, pipe: any): any {
        //check if term search is undefined
        console.log("Estado Array:", pipe)
        if (term === undefined || photos === undefined) {
            return photos.filter(photo => photo.albumId == 1);
        }

        if (pipe == "albumIdCase") {
             console.log(`in albumIdCase, term is: ` + term);
   
            if (isNaN(term) || term === null) {
                return photos.filter(photo => photo.albumId == 1);
            }
            console.log(photos);

            
            
           return photos.filter(photo => photo.albumId == term); 
            //     return albums.filter(photo => (albums.filter(album =>
            //     album.userId == term && photo.albumId == album.id)));    
        }

        if (pipe == "photosIdCase") {
             console.log(`in photosIdCase, term is: ` + term);
   
            if (isNaN(term) || term === null) {
                return photos.filter(photo => photo.id == 1);
            }
            console.log(photos);

            
            
           return photos.filter(photo => photo.id == term); 
            //     return albums.filter(photo => (albums.filter(album =>
            //     album.userId == term && photo.albumId == album.id)));    
        }
/*
        if (pipe == "albumIdCase") {
             console.log(`in albumIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array.filter(photo => photo.albumId == 1);
            console.log(array);
            return array.filter(photo => photo.albumId == term);   
        }

        if (pipe == "photoUserIdCase") {
             console.log(`in photoUserIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array.filter(photo => photo.id == 1);
            console.log(array);
            return array.filter(photo => photo.id == term);
            
        }

     */   

    }


}

