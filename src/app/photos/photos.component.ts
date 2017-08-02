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

  public totalItems: number = 0;
  public currentPage: number = 1;
  public smallnumPages: number = 0;

  firstIndex :number;
  lastIndex :number;

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

  //pagination methods
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    this.setPage(event.page);
    this.firstIndex = (this.currentPage - 1) * 10;
    this.lastIndex = this.currentPage * 10;
  }

  //used to filter the photos
  public photosPerFilter(toAnalize :number):Photo[] {
    var photosPerFilter = [];
    var auxPhotosPerFilter = [];

    this.firstIndex = (this.currentPage - 1) * 10;
    this.lastIndex = this.currentPage * 10;

    var index = 0;
    
    if (toAnalize === null || this.photos === undefined || this.albums === undefined) {
      return null;
    } 

    if(this.pipeType == "userIdCase") {
      for(let album of this.albums) {
          if(album.userId === toAnalize) {
            for(let photo of this.photos) {
                if(album.id === photo.albumId) {
                  photosPerFilter[index] = photo;
                  index++
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
                  index++
                }   
            }
        }
      }
    }

    if(this.pipeType == "photoIdCase") {
          for(let photo of this.photos) {
              if(photo.id === toAnalize) {
                photosPerFilter[index] = photo;
                index++
              }   
          }
    }

    if(photosPerFilter != undefined)
      this.totalItems = photosPerFilter.length;
    else
      this.totalItems = 0;

    var indexAux = 0;
    for(var i = this.firstIndex; i < this.lastIndex; i++) {
        if(photosPerFilter[i] != undefined){ 
          auxPhotosPerFilter[indexAux] = photosPerFilter[i];
          indexAux++;
        }
    }
   
    if(auxPhotosPerFilter === undefined)
      return null;
    else 
      return auxPhotosPerFilter;
          
  }


  
  setSearchType(value: string) {
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
