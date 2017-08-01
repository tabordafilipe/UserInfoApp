import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'generalCase'
})
export class GeneralCasePipe implements PipeTransform {

    transform(array: any, term: any, pipe: any): any {
        //check if term search is undefined
        console.log("Estado Array:", pipe)
        if (term === undefined || array === undefined) {
            return array;
        }

        if (pipe == "nameCase" || pipe == "") {
            return array.filter(function (user) {
                return user.name.toLowerCase().includes(term.toLowerCase());
            })
        }

        if (pipe == "emailCase") {
            return array.filter(function (user) {
                return user.email.toLowerCase().includes(term.toLowerCase());
            })
        }

        if (pipe == "phoneCase") {
            return array.filter(function (user) {
                return user.phone.toLowerCase().includes(term.toLowerCase());
            })
        }

    
        if (pipe == "postsCase") {
            console.log(`in`);
            if (isNaN(term) || term === null)
                return array;
            console.log(array);
            return array.filter(post => post.userId == term);
        }

        if (pipe == "userIdCase") {
            console.log(`in userIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array;
            console.log(array);
            return array.filter(post => post.userId == term);
            
        }
        if (pipe == "postIdCase") {
             console.log(`in postsIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array;
            console.log(array);
            return array.filter(post => post.id == term);
            
        }
/*
        if (pipe == "photosCase") {
             console.log(`in photosCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array.filter(photo => photo.albumId == 1);
            console.log(array);
            return array.filter(photo => photo.albumId == term);    
        }

        if (pipe == "albumIdCase") {
             console.log(`in albumIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array.filter(photo => photo.albumId == 1);
            console.log(array);
            return array.filter(photo => photo.albumId == term);   
        }

        if (pipe == "photoUserIdCase") {
             console.log(`in photoUserIdCase, term is: `+term);
            if (isNaN(term) || term === null)
                return array.filter(photo => photo.id == 1);
            console.log(array);
            return array.filter(photo => photo.id == term);
            
        }

     */   

    }


}

