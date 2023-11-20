let cardWidth = 383.84;

const cards = $("#cards");
const arrowLeft = $("#arrow-left");
const arrowRight = $("#arrow-right");

function hideCards(cardsNumber = 2) {
    let currentWidth = window.innerWidth || document.documentElement.clientWidth;

    if (currentWidth <= 1270) {
        for (i = 1; i < ($(".section-services__card").length + 1); i++) {
            if (i > cardsNumber)
                $(".section-services__card:nth-child(" + i + ")").attr("style", "display: none");
                /*$(".section-services__card:nth-child(" + i + ")").style.display = "none";*/
        }
    }
}
/*function getCardsWidth()*/

arrowLeft.on("click", function () {
    /*cards.attr("style", "left: " + -cardWidth + "px");
    $(".section-services__card:last-child").removeAttr("style");
    $(".section-services__card:first-child").attr("style", "display: none");
    $(".section-services__card:first-child").appendTo(".section-services__cards");
    setTimeout(function() {
        cards.attr("style", "left: " + 0);
    }, 400);*/


    /*$(".section-services__card:last-child").removeAttr("style");
    $(".section-services__card:first-child").attr("style", "display: none");
    $(".section-services__card:first-child").appendTo(".section-services__cards");
    cards.attr("style", "left: " + 0);*/

});

hideCards(2);
window.addEventListener("resize", hideCards);