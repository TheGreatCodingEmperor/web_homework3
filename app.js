// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);
    this.menu.showChoice();

    const mainElement = document.querySelector('#main');
    this.flashcards = new FlashcardScreen(mainElement);

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);

    // Uncomment this pair of lines to see the "flashcard" screen:
    //this.menu.hide();
    //this.flashcards.show();
    function returnThis(){
      return this;
    }
    var APPthis = returnThis.bind(this);
    var button = document.querySelectorAll('#choices div');
    for(let i=0;i<button.length;i++){
      button[i].addEventListener('click',function(){
        APPthis().menu.hide();
        APPthis().flashcards.show();
      });
    }

    // Uncomment this pair of lines to see the "results" screen:
    // this.menu.hide();
    // this.results.show();
  }
}