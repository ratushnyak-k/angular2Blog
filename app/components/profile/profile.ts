import { Component, Injectable } from 'angular2/core';

@Injectable()
@Component({
    templateUrl: './app/components/profile/profile.html',
    selector: 'my-profile'
})


export class MyProfile {

    myProfileObj: Object = {};
    isEdit:boolean = false;

    toggleEdit(e) {
        e.preventDefault();
        this.isEdit = !this.isEdit;
    }
}
