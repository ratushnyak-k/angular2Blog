import { Component, Injectable } from 'angular2/core';
import { UsersModel } from './userModel';
import { MyProfile } from '../profile/profile';
import { PostService } from '../posts/post-service';

@Injectable()
@Component({
    templateUrl: './app/components/users/users.html',
    selector: 'users'
})

export class Users {
    users: [UsersModel] = [
        new UsersModel('Ivan', 'Kon', 'email@email.com', 'Male', './app/static/images/dist/Ivan.jpg'),
        new UsersModel('Dmitry', 'Kol', 'email@email.com', 'Male', './app/static/images/dist/Dmitry.jpg'),
        new UsersModel('Ruslan', 'Chu', 'email@email.com', 'Male', './app/static/images/dist/Ruslan.jpg'),
        new UsersModel('Artem', 'Anc', 'email@email.com', 'Male', './app/static/images/dist/Artem.jpg'),
        new UsersModel('Alex', 'Kud', 'email@email.com', 'Male', './app/static/images/dist/Alex.jpg')
    ];
    myProfileObj;

    ngOnInit() {
        if (localStorage.getItem('myInfo')) {
            this.myProfileObj = JSON.parse(localStorage.getItem('myInfo'));
            this.users = [...this.users, new UsersModel(this.myProfileObj.firstName, this.myProfileObj.lastName, this.myProfileObj.email, this.myProfileObj.gender, this.myProfileObj.ava)];
        }
    }
}
