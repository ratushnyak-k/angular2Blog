export class PostsModel {
    constructor(
        public title: string,
        public text: string,
        public author: string,
        public time: string,
        public img: string,
        public myRate: number = 0,
        public totalRate: number = 0,
        public counstOfPeople: number = 0
    ) {}
}
