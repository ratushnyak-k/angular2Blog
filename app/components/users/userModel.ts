export class UsersModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public gender: string,
        public ava: string = './app/static/images/dist/no_ava.png'
        ) {}
}

