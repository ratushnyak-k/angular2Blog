import { Component } from 'angular2/core';
import { PostsModel } from '../posts/postsModel';
import { PostService } from '../posts/post-service';

@Component({
    templateUrl: './app/components/add_article/add_article.html',
    selector: 'add-article'
})

export class AddArticle {
    postsList = [];
    localStorageData = JSON.parse(localStorage.getItem('myInfo'));
    myFullName = this.localStorageData.firstName + ' ' + this.localStorageData.lastName;
    myNewArticle: PostsModel = new PostsModel('', '', this.myFullName, '', '');
    self;
    ls;
    isEdit: boolean = false;
    posts;
    constructor(public postService: PostService) {
        this.posts = postService;
        this.postService.postsChange.subscribe(value => {
            this.postsList = value
        })
    }

    ngOnInit() {
        self = this;
    }
    readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                self.myNewArticle.img = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    addNewArticle(e) {
        e.preventDefault();
        this.isEdit = true;
        if (localStorage.getItem('postsList')) {
            this.ls = JSON.parse(localStorage.getItem('postsList'));
            for (var i = 0; i < this.ls.length; i++) {
                this.postsList.push(this.ls[i]);
            }
        };
        this.myNewArticle.time = new Date();
        this.postsList.push(this.myNewArticle);

        this.posts.store('postsList', this.postsList);
    }
}
