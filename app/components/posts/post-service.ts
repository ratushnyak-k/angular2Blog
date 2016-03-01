import { Injectable } from 'angular2/core';

import { PostsModel } from './postsModel';

@Injectable()
export class PostService {
    private storage: any;

    constructor() {
        this.storage = localStorage;
    }

    public retrieve(key: string): any {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    }
}
