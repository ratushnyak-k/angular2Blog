import { Component, Input } from 'angular2/core';
import { LeftSideBar } from './left-side-bar';
import { PostsModel } from '../posts/postsModel';
import { Posts } from '../posts/post';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: './app/components/main/main.html',
    selector: 'main',
    directives: [LeftSideBar, ROUTER_DIRECTIVES, Posts],
    styleUrls: ['./app/static/styles/dist/main.css']
})

export class Main {}
