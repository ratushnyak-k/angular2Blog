var fakeData = [
    {
        title: 'First',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.',
        author: 'Ivan Kon',
        time: new Date(),
        img: './app/static/images/dist/1p.jpg',
        myRate: 0,
        totalRate: 1.5,
        countsOfPeople: 4,
        isRated: false
    },
    {
        title: 'Second',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.',
        author: 'Dmitry Kol',
        time: new Date(),
        img: './app/static/images/dist/2p.jpg',
        myRate: 0,
        totalRate: 2.3,
        countsOfPeople: 14,
        isRated: false
    },
    {
        title: 'Third',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.',
        author: 'Ruslan Chu',
        time: new Date(),
        img: './app/static/images/dist/3p.jpg',
        myRate: 0,
        totalRate: 3.2,
        countsOfPeople: 24,
        isRated: false
    },
    {
        title: 'Fourth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.',
        author: 'Artem Anc',
        time: new Date(),
        img: './app/static/images/dist/4p.jpg',
        myRate: 0,
        totalRate: 3.9,
        countsOfPeople: 33,
        isRated: false
    },
    {
        title: 'Fifth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit rerum alias sint similique aspernatur atque. Dicta molestias, harum, necessitatibus assumenda consequatur quaerat maiores praesentium odit quisquam eos non iusto.',
        author: 'Alex Kud',
        time: new Date(),
        img: './app/static/images/dist/5p.jpg',
        myRate: 0,
        totalRate: 4.5,
        countsOfPeople: 323,
        isRated: false
    }
];
if (!localStorage.getItem('postsList')) {
    localStorage.setItem('postsList', JSON.stringify(fakeData));
}
