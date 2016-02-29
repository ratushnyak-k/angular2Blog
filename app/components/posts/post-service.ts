import { Injectable } from 'angular2/core';

import { PostsModel } from './postsModel';
@Injectable()
export class PostService {
    newPostsList;
    postsList: [PostsModel] = [
        new PostsModel('First', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Ivan Kon', new Date(), './app/static/images/dist/1p.jpg', 0, 3, 15),
        new PostsModel('Second', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Dmitry Kol', new Date(), './app/static/images/dist/2p.jpg', 0, 4, 67),
        new PostsModel('Third', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Ruslan Chu', new Date(), './app/static/images/dist/3p.jpg', 0, 3.4, 46),
        new PostsModel('Fourth', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Artem Anc', new Date(), './app/static/images/dist/4p.jpg', 0, 1, 121),
        new PostsModel('Fifth', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Alex Kud', new Date(), './app/static/images/dist/5p.jpg', 0, 3.4, 52)
    ]
    ratePostsList;
    onLoad() {
        if (localStorage.getItem('postsList')) {
            this.newPostsList = JSON.parse(localStorage.getItem('postsList'));
            for (var i = 0; i < this.newPostsList.length; i++) {
                this.postsList.push(
                    new PostsModel(
                        this.newPostsList[i].title,
                        this.newPostsList[i].text,
                        this.newPostsList[i].author,
                        this.newPostsList[i].time,
                        this.newPostsList[i].img
                    )
                )
            }
            localStorage.postsList = '';
        }
    }
}
