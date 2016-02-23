import { Component } from 'angular2/core';
import { LeftSideBar } from './left-side-bar';
import { ROUTER_DIRECTIVES } from 'angular2/router';
@Component({
    templateUrl: './app/components/main/main.html',
    selector: 'main',
    directives: [LeftSideBar, ROUTER_DIRECTIVES],
    styleUrls: ['./app/static/styles/dist/main.css']
})

export class Main {}
