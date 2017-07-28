import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Output } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  @Output() messagefromuser = 'hey im user';

  filterType: string;
  selectedUser: string;

  pipeType: string;
  pipe: string;

  name: String;
  users: User[];

  constructor(UsersService: UsersService){

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

  setSearchName(button: HTMLInputElement) {
    console.log(`Adding filter type button name clicked`);
    this.filterType = 'name';
    this.pipeType = 'nameCase';
  }

  setSearchEmail(button: HTMLInputElement) {
    console.log(`Adding filter type button Email clicked`);
    this.filterType = 'email';
    this.pipeType = 'emailCase'
  }

  setSearchStreet(button: HTMLInputElement) {
    console.log(`Adding filter type button street clicked`);
    this.filterType = 'street';
    this.pipeType = 'streetCase';
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


}
 interface User {
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
