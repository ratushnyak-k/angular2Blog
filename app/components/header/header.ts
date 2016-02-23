import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location } from 'angular2/router';

@Component({
    templateUrl: './app/components/header/header.html',
    selector: 'header',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['./app/static/styles/dist/header.css']
})

export class Header {
    router: Router;
    location: Location;
    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path() === path;
    }
}
