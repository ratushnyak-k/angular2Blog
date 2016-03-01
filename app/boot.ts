import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import { AppComponent } from './components/app';
import { PostService } from './components/posts/post-service';

bootstrap(AppComponent, [PostService, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]).catch(err => console.error(err));;
