export class CommentsModel {
    constructor(
        public time: string,
        public text: string,
        public ava: string,
        public author: string,
        public isEdit: boolean = false
        ) {}
}
