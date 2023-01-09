function month() {
    let date = new Date();
    let options = { month: 'long' };
    console.log(date.getMonth());
    console.log(new Intl.DateTimeFormat('fr-FR', options).format(date));
}
month();

function jour() {
    let date = new Date();
    let dateLocale = date.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    console.log(dateLocale);
}
jour();