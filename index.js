function Book(
   name,
   author,
   edition,
   year,
   addEdition
) {
     this.name=name;
     this.author=author;
     this.edition=edition;
     this.year=year;
     this.addEdition=function(){
       this.edition += 1;
     }
   }

const firstBook = new Book("First", "Suheyla", 1, 1993);

console.log(firstBook.name);
console.log(firstBook);
firstBook.addEdition();
console.log(firstBook);
firstBook.addEdition();
console.log(firstBook);
