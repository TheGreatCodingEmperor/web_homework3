// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  showChoice(){
    var choice = document.querySelector('#choices');
    var button = [];
    for(let i=0;i<3;i++){
      button[i] = document.createElement("DIV");
      choice.appendChild(button[i]);
      button[i].textContent = FLASHCARD_DECKS[i]['title'];
    }
  }
}
