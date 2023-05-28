// get card-body element
const cardBodyReference = document.getElementsByClassName('card-body')[0];

// get card-body-title element
const cardBodyTitleReference =
  document.getElementsByClassName('card-body-title')[0];

// get card-body-description element
const cardBodyDescriptionReference =
  document.getElementsByClassName('card-body-description')[0];

// get line height of the card body title
const cardBodyTitleLineHeight = parseFloat(getComputedStyle(cardBodyTitleReference).lineHeight);

// get no. of lines title is taking with default line-clamp
const noOfLines = Math.round(cardBodyTitleReference.clientHeight / cardBodyTitleLineHeight);

switch (noOfLines) {
  case 1: // if title is of 1 line then assign 6 lines to description
    cardBodyTitleReference.classList.add(
      'card-body-title-condition-1',
    );
    cardBodyDescriptionReference.classList.add(
      'card-body-description-condition-1',
    );
    break;

  case 2: // if title is of 4 lines then assign 3 lines to description  
    cardBodyTitleReference.classList.add(
      'card-body-title-condition-2',
    );
    cardBodyDescriptionReference.classList.add(
      'card-body-description-condition-2',
    );
    break;

  default:
    break;
}