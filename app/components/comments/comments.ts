import { Component, Input } from 'angular2/core';

import { CommentsModel } from './commentsModel';
import { CommentService } from './comment-service';

@Component({
    templateUrl: './app/components/comments/comments.html',
    selector: 'comments',
    providers: [CommentService]
})

export class Comments {
    commonCommentsArray = [];
    service;
    constructor(commentService: CommentService) {
        this.service = commentService;
        if (this.service.get('commonCommentsArray')) {
            this.commonCommentsArray = this.service.get('commonCommentsArray');
        }
        this.myInfo = this.service.get('myInfo');
    }
    @Input() id;
    comments = [];
    newCommentObj: CommentsModel = new CommentsModel();
    myInfo;
    ngOnInit() {
        if (this.service.get('commonCommentsArray')) {
            if (this.service.get('commonCommentsArray')[this.id]) {
                this.comments = this.commonCommentsArray[this.id];
            }
        }
    }
    saveInLS() {
        this.commonCommentsArray[this.id] = this.comments;
        this.service.set('commonCommentsArray', this.commonCommentsArray);
    }
    onAddNewComment(e) {
        e.preventDefault();
        this.newCommentObj.author = this.myInfo.firstName + ' ' + this.myInfo.lastName;
        this.newCommentObj.ava = this.myInfo.ava;
        this.newCommentObj.time = new Date().toString();

        this.comments = [this.newCommentObj, ...this.comments];
        this.saveInLS();
        this.newCommentObj = new CommentsModel();
    }
    editComment(e, index) {
        e.preventDefault();
        this.comments[index].isEdit = true;
    }
    saveEditComment(e, index) {
        e.preventDefault();
        this.comments[index].isEdit = false;
        this.saveInLS();
    }
    removeComment(e, index) {
        e.preventDefault();
        this.comments.splice(index, 1);
        this.saveInLS();
    }
}
