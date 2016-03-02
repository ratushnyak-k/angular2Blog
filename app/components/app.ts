import { Component, provide } from 'angular2/core';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Posts } from './posts/post';
import { ArticleDetail } from './posts/article-detail';
import { AddArticle } from './add_article/add_article';
import { Users } from './users/users';
import { Search } from './search/search';
import { MyProfile } from './profile/profile';

@Component({
    selector: 'my-app',
    directives: [Header, Main, Footer, ROUTER_DIRECTIVES],
    templateUrl: './app/components/app.html'
})
@RouteConfig([
    { path: '/', component: Posts, as: 'Post', useAsDefault: true },
    { path: '/:id', component: ArticleDetail, as: 'ArticleDetail' },
    { path: '/add_article', component: AddArticle, as: 'AddArticle' },
    { path: '/users', component: Users, as: 'Users' },
    { path: '/search', component: Search, as: 'Search' },
    { path: '/profile', component: MyProfile, as: 'Profile' }
])
export class AppComponent {}
