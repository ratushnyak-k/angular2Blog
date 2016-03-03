import { Component } from 'angular2/core';

import { CommentsModel } from './commentsModel';

@Component({
    templateUrl: './app/components/comments/comments.html',
    selector: 'comments'
})

export class Comments {
    comments = [];
    newCommentObj: CommentsModel = new CommentsModel();
    myInfo;
    isEdit: boolean = false;
    ngOnInit() {
        this.myInfo = JSON.parse(localStorage.getItem('myInfo'));
    }
    onSubmit(e) {
        e.preventDefault();
        this.newCommentObj.author = this.myInfo.firstName + ' ' + this.myInfo.lastName;
        this.newCommentObj.ava = this.myInfo.ava;
        this.newCommentObj.time = new Date().toString();
        console.log(this.newCommentObj)
        this.comments = [...this.comments, this.newCommentObj];
        this.newCommentObj = new CommentsModel();
    }
    editComment(e) {
        e.preventDefault();
        console.log(e)
        this.isEdit = true;
    }
}
