import { Component, Injectable } from 'angular2/core';

@Injectable()
@Component({
    templateUrl: './app/components/profile/profile.html',
    selector: 'my-profile'
})


export class MyProfile {
    firstName;
    lastName;
    email;
    gender;
    onSubmit(f, l, e, g):void{
        console.log(f, l, e, g);
    }
    onGenderClick(a):void{
        console.log(a)
    }
}
