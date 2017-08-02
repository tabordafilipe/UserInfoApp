import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes, appRoutingProviders } from './app.router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

import { UsersService } from './users.service';


import { GeneralCasePipe } from './pipes/general-case.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PhotosComponent,
    UsersComponent,
    GeneralCasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes 
  ],
  providers: [ UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
