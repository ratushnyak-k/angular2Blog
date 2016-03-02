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
    isLoggined;
    constructor(public postService: PostService) {
        this.posts = postService;
        this.postService.postsChange.subscribe(value => {
            this.postsList = value;
            this.onChangePostsList();
        })
    }
    ratePostsList;
    onChangePostsList ():void {
        if (this.postsList) {
            this.ratePostsList = this.postsList.slice();
            this.ratePostsList.sort(function(a, b) {
                return b.totalRate - a.totalRate;
            });
        }
    }
    ngOnInit() {
        this.postsList = this.posts.get('postsList');
        this.isLoggined = this.posts.get('myInfo');
        this.onChangePostsList();
    }
}
