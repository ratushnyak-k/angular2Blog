import { Injectable, EventEmitter } from 'angular2/core';

import { PostsModel } from './postsModel';
@Injectable()
export class PostService {
    private storage: any;
    postsChange: EventEmitter<any>;
    constructor() {
        this.storage = localStorage;
        this.postsChange = new EventEmitter();
    }
    public get(key: string): any {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    }
    public set(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
        this.postsChange.emit(value);
    }
}
