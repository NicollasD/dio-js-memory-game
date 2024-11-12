const emojis = [
    "🥷",
    "🥷",
    "🧙‍♂️",
    "🧙‍♂️",
    "🧟",
    "🧟",
    "👨‍🚀",
    "👨‍🚀",
    "🦹‍♂️",
    "🦹‍♂️",
    "🧛‍♂️",
    "🧛‍♂️",
    "🦸‍♂️",
    "🦸‍♂️",
    "🧌",
    "🧌"
];
let openCards = [];
let shuffledCards = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let card = document.createElement("div");
    card.className = "item";
    card.innerHTML = shuffledCards[i];
    card.onclick = handleClick;
    document.querySelector(".game").appendChild(card);
}

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("cardMatch") && !openCards.includes(this)) {
        this.classList.add("cardOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards.forEach((card) => card.classList.add("cardMatch"));
    } else {
        openCards.forEach((card) => card.classList.remove("cardOpen"));
    }
    openCards = [];

    if (document.querySelectorAll(".cardMatch").length === emojis.length) {
        alert("Você venceu!");
    }
}