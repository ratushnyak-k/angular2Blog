import { Component } from 'angular2/core';
import { PostsModel } from './postsModel';

@Component({
    templateUrl: './app/components/posts/post.html',
    selector: 'posts-list'
})

export class Posts {
    newPostsList;
    postsList: [PostsModel] = [
        new PostsModel('First', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Ivan Kon', new Date(), './app/static/images/dist/1p.jpg'),
        new PostsModel('Second', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Dmitry Kol', new Date(), './app/static/images/dist/2p.jpg'),
        new PostsModel('Third', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Ruslan Chu', new Date(), './app/static/images/dist/3p.jpg'),
        new PostsModel('Fourth', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Artem Anc', new Date(), './app/static/images/dist/4p.jpg'),
        new PostsModel('Fifth', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.', 'Alex Kud', new Date(), './app/static/images/dist/5p.jpg')
    ]
    ngOnInit(){
        if (localStorage.getItem('postsList')) {
            this.newPostsList = JSON.parse(localStorage.getItem('postsList'));
            this.postsList = [...this.postsList, new PostsModel(this.newPostsList.title, this.newPostsList.text, this.newPostsList.author, this.newPostsList.time, this.newPostsList.img)];
        }
    }
}
