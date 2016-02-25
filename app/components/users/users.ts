import { Component, Injectable } from 'angular2/core';
import { UsersModel } from './userModel';
import { MyProfile } from '../profile/profile';

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
}
