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

  /*
  setPageSize() {
    let i = 0.05 * this.photos.length;
    this.numberOfPages = i;
  }

  /*
  numberOfPhotosPerUser(userId: number):number {

    let i = 0;

    for(let album of this.albums) {
      if(userId === album.userId) {
        for(let photo of this.photos) {
          if(album.id === photo.albumId){
            i++;
          }
        }
      }
    }

    return i;

  }
  */ 

  public photosPerUser(user :number):Photo[] {
    console.log(`The id is: `,user);
    console.log(`Albums: `,this.albums);
    console.log(`Photos: `,this.photos);
    var photosPerUser = [];
    var index = 0;
    
    if (user === null || this.photos === undefined || this.albums === undefined) {
        return null;
    } 
    for(let album of this.albums) {
        if(album.userId === user) {
          for(let photo of this.photos) {
              if(album.id === photo.albumId) {
                photosPerUser[index] = photo;
                if(index <= 10)
                  index++;
                else
                  return photosPerUser;
              }   
            
          }
        }
      }
    console.log(`we're in photosPerUser and array is: `,photosPerUser);
    return photosPerUser;      
    }
  
  setSearchType(value: string) {
    console.log(`SEARCH TYPE - ` + value + `name is: ` + name);
    this.pipeType = value;
    /*
    if(value == "userIdCase") 
      this.pipeType = "userIdCase";   
    if(value == "albumIdCase") 
      this.pipeType = "albumIdCase";
    if(value == "photoIdCase")
      this.pipeType = "photoIdCase";
    */
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
