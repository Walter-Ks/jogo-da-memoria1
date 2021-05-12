const FRONT = "front";
const BACK = "back";
const CARD = "card";
const ICON = "icon";

    start();

    function start() {
        iniciarCartas(game.creatCardFront());

        
    }

    function iniciarCartas(cards){
        let bord = document.getElementById("bord")

        game.cards.forEach(card =>{

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        creatCardContent(card, cardElement)    
        cardElement.addEventListener('click', flipCard)
        bord.appendChild(cardElement);


    })

}

function creatCardContent(card, cardElement){
    creatCardFace(FRONT, card, cardElement);
    creatCardFace(BACK, card, cardElement);

}


function creatCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "img/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML =  "<img src='img/index.png'></img>"
    }
    element.appendChild(cardElementFace)
}

creatCardFront(imgs)

function flipCard() {

    if(game.setCard(this.id)){
    this.classList.add("flip");
    if(game.checkMath()) {
        game.clearCards();
    }else{
        setTimeout(() =>{
        let firstCardView = document.getElementById(game.firstCard.id);
        let secondCardView = document.getElementById(game.secondCard.id);

        firstCardView.classList.remove("flip");
        secondCardView.classList.remove("flip");
        game.clearCards()
    },1000);

    }
    }

}