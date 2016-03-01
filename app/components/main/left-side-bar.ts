import { Component } from 'angular2/core';
import { PostService } from '../posts/post-service';

@Component({
    templateUrl: './app/components/main/left-side-bar.html',
    selector: 'left-side-bar',
    styleUrls: ['./app/static/styles/dist/left-side-bar.css']
})

export class LeftSideBar {
    posts;
    postsList;
    constructor(postService: PostService) {
        this.posts = postService;
    }
    ratePostsList;
    ngOnInit() {
        this.postsList = this.posts.retrieve('postsList')
        this.ratePostsList = this.postsList.slice();
        this.ratePostsList.sort(function(a, b) {
            return b.totalRate - a.totalRate;
        });
    }
}
