import { Component, Injectable } from 'angular2/core';

@Injectable()
@Component({
    templateUrl: './app/components/profile/profile.html',
    selector: 'my-profile'
})


export class MyProfile {

    myProfileObj: Object = {};
    isEdit:boolean = false;
    ngOnInit(){
        if (localStorage.getItem('myInfo')){
            this.myProfileObj = JSON.parse(localStorage.getItem('myInfo'));
            this.isEdit = true;
        }
    }
    saveMyProfile(e) {
        e.preventDefault();
        this.isEdit = true;
        localStorage.setItem('myInfo', JSON.stringify(this.myProfileObj));
    }
    editMyProfile(e) {
        e.preventDefault();
        this.isEdit = false;
    }
}
