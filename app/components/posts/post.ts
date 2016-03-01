import { Component, Input } from 'angular2/core';
import { PostsModel } from './postsModel';
import { PostService } from './post-service';

@Component({
    templateUrl: './app/components/posts/post.html',
    selector: 'posts-list'
})

export class Posts {
    posts;
    postsList;
    constructor(postService: PostService) {
        this.posts = postService;
    }
    ngOnInit(){
        this.postsList = this.posts.retrieve('postsList');
    }
    currentRate = [0, 1, 2, 3, 4, 5];
    onSelectRate(value) {
        console.log(value);
    }
}
