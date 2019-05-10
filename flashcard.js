// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class Flashcard {
  constructor(containerElement, frontText, backText) {
    this.containerElement = containerElement;

    this._flipCard = this._flipCard.bind(this);

    this.flashcardElement = this._createFlashcardDOM(frontText, backText);
    this.containerElement.append(this.flashcardElement);

    this.originX = null;
    this.originY = null;

    this.offsetX = 0;
    this.offsetY = 0;

    this.deltaX = 0;
    this.deltaY = 0;

    this.dragStarted = false;

    this.flashcardElement.addEventListener('pointerup', this._flipCard);
    
    this._flipStart = this._flipStart.bind(this);
    this._flipMove = this._flipMove.bind(this);
    this._flipEnd = this._flipEnd.bind(this);

    this.flashcardElement.addEventListener('pointerup',this._flipEnd);
    this.flashcardElement.addEventListener('pointermove',this._flipMove);
    this.flashcardElement.addEventListener("pointerdown",this._flipStart);
  }

  // Creates the DOM object representing a flashcard with the given
  // |frontText| and |backText| strings to display on the front and
  // back of the card. Returns a reference to root of this DOM
  // snippet. Does not attach this to the page.
  //
  // More specifically, this creates the following HTML snippet in JS
  // as a DOM object:
  // <div class="flashcard-box show-word">
  //   <div class="flashcard word">frontText</div>
  //   <div class="flashcard definition">backText</div>
  // </div>
  // and returns a reference to the root of that snippet, i.e. the
  // <div class="flashcard-box">
  _createFlashcardDOM(frontText, backText) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('flashcard-box');
    cardContainer.classList.add('show-word');

    const wordSide = document.createElement('div');

    wordSide.classList.add('popup');

    wordSide.classList.add('flashcard');
    wordSide.classList.add('word');
    wordSide.textContent = frontText;

    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard');
    definitionSide.classList.add('definition');
    definitionSide.textContent= backText;

    cardContainer.appendChild(wordSide);
    cardContainer.appendChild(definitionSide);
    return cardContainer;
  }

  _flipCard(event) {
    this.flashcardElement.classList.toggle('show-word');
  }

  _flipStart(event){
    console.log("click");
    this.originX = event.clientX;
    this.originY = event.clientY;
    this.dragStarted = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  _flipMove(event){
    if (!this.dragStarted) {
      return;
    }
    event.preventDefault();
    this.deltaX = event.clientX - this.originX;
    this.deltaY = event.clientY - this.originY;
    console.log("offset: "+this.offsetX+" "+this.offsetY);
    const translateX = this.offsetX + this.deltaX;
    const translateY = this.offsetY + this.deltaY;
    event.currentTarget.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
    event.currentTarget.style.transform += 'rotate(' + this.deltaX * 0.2 + 'deg)';
    console.log(this.deltaX);
  }
  _flipEnd(event){
    console.log("release");
    this.dragStarted = false;
    this.offsetX = 0;
    this.offsetY = 0;
    event.currentTarget.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)';
  }
}
