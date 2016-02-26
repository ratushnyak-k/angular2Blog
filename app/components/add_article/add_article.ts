import { Component } from 'angular2/core';
import { PostsModel } from '../posts/postsModel';

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
    isEdit: boolean = false;
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
    addNewArticle(e){
        e.preventDefault();
        this.isEdit = true;
        this.myNewArticle.time = new Date();
        var ls = JSON.parse(localStorage.getItem('postsList'));
        this.postsList.push(ls);
        this.postsList.push(this.myNewArticle);
        console.log(this.postsList)

        localStorage.setItem('postsList', JSON.stringify(this.postsList));
    }
}
