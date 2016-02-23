import { Component } from 'angular2/core';
import { Header } from './header/header';
@Component({
    selector: 'my-app',
    directives: [Header],
    templateUrl: './app/components/app.html'
})

export class AppComponent {}
