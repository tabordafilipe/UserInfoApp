import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalCase'
})
export class GeneralCasePipe implements PipeTransform {
    
    transform(users: any, term: any, pipe: any): any {
        //check if term search is undefined
        console.log(`we're in tranform with pipe: ` + pipe)
        if (term == undefined) {
            console.log(`undefined pipe: ` + term);
            return users;
        }
        
        if(pipe == "nameCase" || pipe == ""){
            console.log(`--we're in nameCase`)
          return users.filter(function(user){
            return user.name.toLowerCase().includes(term.toLowerCase());
            }) 
        }

        if(pipe == "emailCase"){
            console.log(`--we're in emailCase`)
          return users.filter(function(user){
            return user.email.toLowerCase().includes(term.toLowerCase());
            })
        }

            if(pipe == "phoneCase"){
            console.log(`--we're in phoneCase`)
          return users.filter(function(user){
            return user.phone.toLowerCase().includes(term.toLowerCase());
            })
        }
  
    }
  

}

