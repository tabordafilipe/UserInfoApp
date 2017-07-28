import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { UsersComponent } from '../users/users.component'

@Component({
  selector: 'app-posts',

  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  
})
export class PostsComponent implements OnInit {

 @Input() message: string;

  name: String;

  constructor() { 
    console.log(`this message `+this.message+`it sent to posts`);
  }

  ngOnInit() {
    
  }

}
