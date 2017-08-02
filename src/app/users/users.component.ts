import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';


import { PostsComponent } from '../posts/posts.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  filterType: string;
  selectedUser: string;

  pipeType: string;

  name: String;
  users: User[];

  constructor(UsersService: UsersService, private router: Router){

    this.pipeType = '';
   
    UsersService.getHTTP()
      .subscribe(
        users => {
          this.users = users;
        }

      );

  }

  ngOnInit() {
  }

  setSearchType(value: String) {
    console.log(`SEARCH TYPE - ` + value);
    if(value == "nameCase")
      this.pipeType = "nameCase";
    if(value == "emailCase")
      this.pipeType = "emailCase";
    if(value == "phoneCase")
      this.pipeType = "phoneCase";
  }


  saveSelectedUser(button: HTMLInputElement) {
    console.log(JSON.stringify(button));
    this.selectedUser = (JSON.stringify(button));
  }

  getUserIDfromUsername(username: string) {
    let user = username.replace(/"/g, '');
    for(let person of this.users) {
      if(person.username == user) {
        return person.id;
      }
    }
    return 0;
    }

}


 interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    
  }
  
  interface Address {
    street: string;
    suite: string;
    zipcode: string;
  }
