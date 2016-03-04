import { Component } from 'angular2/core';
import { PostsModel } from '../posts/postsModel';
import { PostService } from '../posts/post-service';
import { CommentService } from '../comments/comment-service';

@Component({
    templateUrl: './app/components/add_article/add_article.html',
    selector: 'add-article',
    providers: [CommentService]
})

export class AddArticle {
    postsList = [];
    localStorageData = JSON.parse(localStorage.getItem('myInfo'));
    myFullName = this.localStorageData.firstName + ' ' + this.localStorageData.lastName;
    myNewArticle: PostsModel = new PostsModel('', '', '', this.myFullName, '', '');
    self;
    ls;
    isEdit: boolean = false;
    posts;
    commentService;
    commonCommentsArray;
    constructor(public postService: PostService, commentService: CommentService) {
        this.posts = postService;
        this.postService.postsChange.subscribe(value => {
            this.postsList = value;
        });
        this.commentService = commentService;
        this.commonCommentsArray = commentService.get('commonCommentsArray');
    }
    ngOnInit() {
        self = this;
        this.commonCommentsArray = [...this.commonCommentsArray, []];
        this.commentService.set('commonCommentsArray', this.commonCommentsArray);
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
        if (this.myNewArticle.text.length > 15) {
            this.myNewArticle.text_cut = this.myNewArticle.text.slice(0, 100) + '...';
        } else {
            this.myNewArticle.text_cut = this.myNewArticle.text;
        }
        this.myNewArticle.time = new Date();

        this.postsList.push(this.myNewArticle);

        this.posts.set('postsList', this.postsList);
    }
}
