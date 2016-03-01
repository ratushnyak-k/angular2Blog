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
    storage;
    constructor(public postService: PostService) {
        this.posts = postService;
        this.postService.postsChange.subscribe(value =>{
            this.postsList = value;
        })
    }
    ngOnInit(){
        this.postsList = this.posts.retrieve('postsList');
    }
    postRated(value, index) {
        var newRate = +(value.target.value);
        var countsOfPeople = +(this.postsList[index]['countsOfPeople']) + 1;
        var totalRate = +(this.postsList[index]['totalRate']);

        this.postsList[index]['myRate'] = newRate;
        this.postsList[index]['totalRate'] = (newRate + totalRate) / countsOfPeople;
        this.postsList[index]['isRated'] = true;
        this.posts.store('postsList', this.postsList);
    }
}
