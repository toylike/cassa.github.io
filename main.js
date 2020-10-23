let selectHeader = document.querySelectorAll('.select_header');
let selectItems = document.querySelectorAll('.select_item');

for(let elem of selectHeader){
    elem.addEventListener('click', dropSelectBody);
}
for(let selectItem of selectItems){
  selectItem.addEventListener('click', selectChoose);
}

function dropSelectBody(){
  this.parentElement.classList.toggle('is-active') ;
}

function selectChoose(){
  let currentText = this.closest('.select');
  currentText.querySelector('.select_current').innerText = this.innerText;
  currentText.classList.remove('is-active');
}






let buttons = document.querySelectorAll('.button');
let cards = document.querySelectorAll('.b_cards_wrapCard');

for(let batton of buttons){
  batton.addEventListener('click', changeCard);
}

function changeCard(){
    let idButton = this.getAttribute('id');

    for(let card of cards){

      if(idButton === card.getAttribute('id')){
        card.classList.add('card_active');
        for(let batton of buttons){
          batton.classList.remove('button_active');
        }
        this.classList.add('button_active');
      }else{
        card.classList.remove('card_active');
      }
    }
}
