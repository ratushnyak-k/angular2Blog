import { Injectable } from 'angular2/core';

@Injectable()
export class CommentService {
    private storage: any;
    constructor() {
        this.storage = localStorage;
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
    }
}
