class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }
 
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }  
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof PrintEditionItem && book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        if (book) {
            let index = this.books.findIndex(bookItem => bookItem === book);
            this.books.splice(index, 1);
        }
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = new Map();
    }

    addMark(mark, subject) {
        if (!this.subjects.has(subject)) {
            this.subjects.set(subject, [mark]);
        } else {
            let currentMarks = this.subjects.get(subject);
            currentMarks.push(mark);
            this.subjects.set(subject, currentMarks);
        }
    }

    getAverageBySubject(subject) {
        if (!this.subjects.has(subject)) {
            return null;
        } else {
            let sum = 0,
                currentMarks = this.subjects.get(subject),
                len = currentMarks.length;
            for (let i = 0; i < len; i++) {
                sum += currentMarks[i];
            }
            return sum / len;
        }
    }

    getAverage() {
        let sum = 0;
        if (!this.subjects.size) {
            return sum;
        }
        this.subjects.forEach((item, index) => {
            sum += this.getAverageBySubject(index);
        });
        return sum / this.subjects.size;
    }
}