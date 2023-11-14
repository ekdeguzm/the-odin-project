function Book(title, author, pages, read) {
  this.title = "The Hobbit";
  this.author = "J.R.R. Tolkien";
  this.pages = "295 pages";
  this.read = "already read"
  this.info = function() {
    console.log(Title + " by " + author + pages + read)
  };
}

theHobbit.info()