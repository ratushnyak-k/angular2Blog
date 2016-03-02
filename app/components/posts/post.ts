import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';

import { PostsModel } from './postsModel';
import { PostService } from './post-service';

@Component({
    templateUrl: './app/components/posts/post.html',
    selector: 'posts-list'
})

export class Posts {
    posts;
    postsList;
    storage;
    constructor(
        public postService: PostService,
        private _router: Router) {
        this.posts = postService;
        this.postService.postsChange.subscribe(value => {
            this.postsList = value;
        })
    }
    ngOnInit() {
        this.postsList = this.posts.get('postsList');
    }
    getThisArticle(index){
        this._router.navigate( ['ArticleDetail', { id: index }] );
    }
    postRated(value, index) {
        var newRate = +(value.target.value);
        var countsOfPeople = +(this.postsList[index]['countsOfPeople']) + 1;
        var totalRate = +(this.postsList[index]['totalRate']);

        this.postsList[index]['myRate'] = newRate;
        this.postsList[index]['totalRate'] = ((newRate + totalRate * countsOfPeople) / countsOfPeople).toFixed(1);
        this.postsList[index]['isRated'] = true;
        this.posts.set('postsList', this.postsList);
    }
}
