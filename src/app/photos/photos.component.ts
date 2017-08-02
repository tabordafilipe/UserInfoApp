import { Component, OnInit } from '@angular/core';

import { UsersComponent } from '../users/users.component'

import { AlbumsService } from '../albums.service';
import { PhotosService } from '../photos.service';

import { ActivatedRoute } from '@angular/router'

import { GeneralCasePipe } from '../pipes/general-case.pipe'; 

@Component({
  selector: 'app-photos',

  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosService, AlbumsService]
   
})
export class PhotosComponent implements OnInit {

  private sub;
  private id: number;

  private pipeType: string;

  albums: Album[];
  photos: Photo[];
  numberOfPages: number;

  constructor(AlbumsService: AlbumsService, PhotosService: PhotosService, private route: ActivatedRoute) { 

    this.id = 0;
    this.pipeType = 'userIdCase';

    AlbumsService.getHTTP()
      .subscribe(
        albums => {
          this.albums = albums;
          console.log(albums);
        }

    );

    PhotosService.getHTTP()
      .subscribe(
        photos => {
          this.photos = photos;
          console.log(photos);
        }
    );
    
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  public photosPerFilter(toAnalize :number):Photo[] {
    console.log(`The id is: `,toAnalize);
    console.log(`Albums: `,this.albums);
    console.log(`Photos: `,this.photos);
    var photosPerFilter = [];
    var index = 0;
    
    if (toAnalize === null || this.photos === undefined || this.albums === undefined) {
      console.log(`to analize`,toAnalize);
      console.log(`photos`,this.photos);
      console.log(`albums`,this.albums);
      /*
      for(let i = 0; i < 10; i++) {
        photosPerFilter[i] = this.photos
      }
      
      return photosPerFilter;
      */
      return null;
    } 
    if(this.pipeType == "userIdCase") {
    for(let album of this.albums) {
        if(album.userId === toAnalize) {
          for(let photo of this.photos) {
              if(album.id === photo.albumId) {
                photosPerFilter[index] = photo;
                if(index <= 10)
                  index++;
                else
                  return photosPerFilter;
              }   
            
          }
        }
      }
    }

    if(this.pipeType == "albumIdCase") {
        for(let album of this.albums) {
        if(album.id === toAnalize) {
          for(let photo of this.photos) {
              if(album.id === photo.albumId) {
                photosPerFilter[index] = photo;
                if(index <= 10)
                  index++;
                else
                  return photosPerFilter;
              }   
            
          }
        }
      }
    
    }

    if(this.pipeType == "photoIdCase") {
          for(let photo of this.photos) {
              if(photo.id === toAnalize) {
                photosPerFilter[index] = photo;
                if(index <= 10)
                  index++;
                else
                  return photosPerFilter;
              }   
            
          }
        
      
    
    }

    console.log(`we're in photosPerUser and array is: `,photosPerFilter);
    return photosPerFilter;      
    }


  
  setSearchType(value: string) {
    console.log(`SEARCH TYPE - ` + value + `name is: ` + name);
   this.pipeType = value;
  }



}

interface Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbailUrl: string;
}

interface Album{
  userId: number;
  id: number;
  title: string;
}
