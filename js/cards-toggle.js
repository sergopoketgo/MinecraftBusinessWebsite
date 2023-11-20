/*function checkWidth() {let currentWidth = window.innerWidth || document.documentElement.clientWidth;}
checkWidth()
window.addEventListener("resize", checkWidth);*/

const arrowLeft = $("#arrow-left");
const arrowRight = $("#arrow-right");
const card = $(".section-services__card");
let cardLastChild = $(".section-services__card:last-child");
/*cardIsActive = [];*/

/*for (i = 0; i < card.length; i++)
    cardIsActive[i] = !(i > 1);*/
/*cardIsActive = $.grep(cardIsActive, function(element) {return element !== false;});*/

arrowLeft.on("click", function () {
    /*let cardIsActiveFalseIndex = cardIsActive.indexOf(false);
    cardIsActive[cardIsActiveFalseIndex] = true;
    cardIsActive[(cardIsActiveFalseIndex + 1) % cardIsActive.length] = false;*/
    setCardIsActive();
    /*console.log(cardIsActive);*/




    /*for (i = 0; i < card.length; i++) {
        $(".section-services__card:nth-child(" + i + ")").attr("style", "display: none");
    }*/

});

function hideCardsGt2() {
    let currentWidth = window.innerWidth || document.documentElement.clientWidth;

    if(currentWidth <= 1270) {
        /*card.removeAttr("style");
        cardLastChild.attr("style", "display: none");*/
    } else
        card.removeAttr("style");
}

function setCardIsActive() {
    for (i = 1; i > 0; i--) {
        cardLastChild = $(".section-services__card:last-child");

        card.attr("style", "transition: .4");  /*transform: translateX(-384px);*/
        $(".section-services__card:first-child").attr("style", "transition: .4, display: none");
        $(".section-services__card:first-child").appendTo(".section-services__cards");


        /*cardLastChild.prependTo(".section-services__cards");
        cardLastChild.attr("style", "display: none");*/


       /* $(".section-services__card:nth-child(" + 2 + ")").prependTo(".section-services__cards");

        card.removeAttr("style");
        $(".section-services__card:last-child").attr("style", "display: none");*/
            /*$(".section-services__card:nth-child(" + (i + 1) + ")").prependTo(".section-services__cards");*/
        /*if (cardIsActive[i] === true)
            $(".section-services__card:nth-child(" + (i + 1) + ")").removeAttr("style");
        else
            $(".section-services__card:nth-child(" + (i + 1) + ")").attr("style", "display: none");*/
    }
}

hideCardsGt2();
window.addEventListener("resize", hideCardsGt2);