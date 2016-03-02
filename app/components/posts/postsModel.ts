export class PostsModel {
    constructor(
        public title: string,
        public text: string,
        public text_cut: string,
        public author: string,
        public time: string,
        public img: string,
        public myRate: number = 0,
        public totalRate: number = 0,
        public countsOfPeople: number = 0,
        public isRated: boolean = false
    ) {}
}
