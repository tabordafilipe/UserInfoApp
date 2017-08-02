import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'generalCase'
})
export class GeneralCasePipe implements PipeTransform {

    transform(array: any, term: any, pipe: any): any {
        //check if term search is undefined
        if (term === undefined || array === undefined) {
            return array;
        }
        
        switch(pipe) { 
        case "": { 
            return array.filter(function (user) {
                return user.name.toLowerCase().includes(term.toLowerCase());
        });
        }
        case "nameCase": { 
            return array.filter(function (user) {
                return user.name.toLowerCase().includes(term.toLowerCase());
        });
        } 
        case "emailCase": { 
            return array.filter(function (user) {
                return user.email.toLowerCase().includes(term.toLowerCase());
            }); 
        } 
        case "phoneCase": {
            return array.filter(function (user) {
                return user.phone.toLowerCase().includes(term.toLowerCase());
            });  
        } 
        case "postsCase": { 
            if (isNaN(term) || term === null)
                return array;
            console.log(array);
            return array.filter(post => post.userId == term); 
        }  
        case "userIdCase": { 
            console.log(`in userIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array;
            console.log(array);
            return array.filter(post => post.userId == term);    
        } 
        case "postIdCase": { 
            console.log(`in postsIdCase, term is: `+term);
                if (isNaN(term) || term === null)
                    return array;
            console.log(array);
            return array.filter(post => post.id == term);   
        } 

    }


}





   
}




