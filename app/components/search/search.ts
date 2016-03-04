import { Component } from 'angular2/core';
import { Router } from 'angular2/router';


import { Posts } from '../posts/post';
import { PostService } from '../posts/post-service';

@Component({
    templateUrl: './app/components/search/search.html',
    directives: [Posts],
    selector: 'search'
})

export class Search {
    searchPosts;
    isSearch: boolean = true;
    isFound: boolean = true;
    canRate: boolean = false;
    posts;
    constructor(posts: PostService) {
        this.posts = posts.get('postsList');
    }
    searchByPost(value) {
        var query = value.toLowerCase();
        if (query) {
            this.isSearch = false;
            this.searchPosts = this.posts.filter(function(i) {
                return i.title.toLowerCase().indexOf(query) >= 0;
            });
            this.isFound = true;
            if (!this.searchPosts.length) {
                this.isFound = false;
            }
        } else {
            this.isFound = true;
            this.isSearch = true;
        }
    }
}
