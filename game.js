let game = {

    localMode: false,
    firstCard: null,
    secondCard:null,

    setCard: function(id) {
       let card= this.cards.filter(card=>card.id===id)[0];

       if(card.flipped || this.localMode) {
           return false;
       }

       if(!this.firstCard){
           this.firstCard = card
           return true;
       }else{
           this.secondCard = card;
           this.localMode = true;
           return true;
       }
    },

    checkMath: function(){
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.localMode = false;
    },


    imgs: ["1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"],
    card: null,

    
    creatCardFront: function() {
    this.cards =[];

    this.imgs.forEach((img) => {
        this.cards.push(this.creatPainFont(img));
    })
   this.cards = this.cards.flatMap(pair => pair);
   this.embaralhar();
   return this.cards
    },


    creatPainFont: function(img){
    return [{
        id: this.creatIds(img),
        icon: img,
        flip: false
    },{
        id: this.creatIds(img),
        icon: img,
        flip: false
    }]
    },

    creatIds: function(img){
    return img + parseInt(Math.random()* 1000)
    },

    embaralhar: function(cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }


    }



}