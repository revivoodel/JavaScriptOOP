class MediaItem {
    constructor(title,genre, year) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    getSummary() {
        return "title: " + this.title + " genre: " + this.genre + " title: " + this.title;
    }
}
class Book extends MediaItem {
    constructor(title, genre, year, author, pageCount) {
        super(title,genre, year);
        this.author = author;
        this.pageCount = pageCount;
    }

    getSummary() {
        return "Book: " + this.title + " by " + this.author + ", " + this.pageCount + " pages";
    }
}


class Movie extends MediaItem {
    constructor(title,genre, year, director, durationMinutes) {
        super(title,genre, year);
        this.director = director;
        this.durationMinutes = durationMinutes;
    }

    getSummary() {
        return "Movie: " + this.title + "directed by " + this.director + ", " + this.durationMinutes + " min";
    }
}

class Library {
    constructor() {
        this.list = [];
    }

    addItem(item) {
        this.list.push(item);
    }
    search(term) {
        return this.list.filter((l) => l.title.toLowerCase().includes(term.toLowerCase()));
    }


    listByGenre(genre) {
        return this.list.filter((l) => l.genre == genre);
    }

}


const lib = new Library();

lib.addItem(new Book("Dune", "Sci-Fi", 1965, "Frank Herbert", 412));
lib.addItem(new Movie("Dune", "Sci-Fi", 2021, "Denis Villeneuve", 155));

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));