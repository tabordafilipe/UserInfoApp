import { Component, OnInit } from '@angular/core';

import { UsersComponent } from '../users/users.component'
import { PostsService } from '../posts.service';

import { ActivatedRoute } from '@angular/router'

import { GeneralCasePipe } from '../pipes/general-case.pipe'; 

@Component({
  selector: 'app-posts',

  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
  
})
export class PostsComponent implements OnInit {

  private sub;
  private id: number;

  private pipeType: string;

  posts: Posts[];

  constructor(PostsService: PostsService, private route: ActivatedRoute) { 

    this.id = 0;
    this.pipeType = 'postsCase';

    PostsService.getHTTP()
      .subscribe(
        posts => {
          console.log("Servidor",posts);
          this.posts = posts;
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

  setSearchType(value: String) {
    console.log(`SEARCH TYPE - ` + value + `name is: ` + name);
    if(value == "userIdCase") 
      this.pipeType = "userIdCase";
    if(value == "postIdCase")
      this.pipeType = "postIdCase";
  }



}

interface Posts{
  userId: number;
  id: number;
  title: string;
  body: string;
}
