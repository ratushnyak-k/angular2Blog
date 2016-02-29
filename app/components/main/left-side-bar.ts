import { Component } from 'angular2/core';
import { PostService } from '../posts/post-service';

@Component({
    templateUrl: './app/components/main/left-side-bar.html',
    selector: 'left-side-bar',
    styleUrls: ['./app/static/styles/dist/left-side-bar.css']
})

export class LeftSideBar {
    postsList;
    constructor(postSevice: PostService) {
        // postSevice.onLoad();
        this.postsList = postSevice.postsList;
        console.log(this.postsList);
    }
    ratePostsList;
    ngOnInit() {
        this.ratePostsList = this.postsList.slice();
        this.ratePostsList.sort(function(a, b) {
            return b.totalRate - a.totalRate;
        });
    }
}
