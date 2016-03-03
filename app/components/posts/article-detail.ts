import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { PostService } from './post-service';
import { Comments } from '../comments/comments';


@Component({
    templateUrl: './app/components/posts/article-detail.html',
    directives: [Comments]
})
export class ArticleDetail {
    article;
    articles;
    newArticles;
    id;
    constructor(posts: PostService, routeParams: RouteParams) {
        this.id = routeParams.get('id');
        this.newArticles = posts.get('postsList');
        this.article = this.newArticles[this.id];
        this.articles = posts;
    }
    postRated(value, index) {
        var newRate = +(value.target.value);
        var countsOfPeople = +(this.article['countsOfPeople']) + 1;
        var totalRate = +(this.article['totalRate']);

        this.article['myRate'] = newRate;
        this.article['totalRate'] = ((newRate + totalRate * countsOfPeople) / countsOfPeople).toFixed(1);
        this.article['isRated'] = true;
        this.newArticles[this.id] = this.article;
        this.articles.set('postsList', this.newArticles);
    }
}
