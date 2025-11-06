
const cards = [
    {
        id: 1,
        name: "Sentinelle Cybernétique",
        description: "Une défenseuse avec le feux de tech. ",
        img: "./images/card11.png",
        price: 25.50 ,
        rarety: "épic",

    },
    {
        id: 2,
        name: "Void Witch",
        description: "Une créature de pure énergie.",
        img: "./images/card2.png",
        price: 25.50 ,
        rarety: "Commun",

    },
    {
        id: 3,
        name: "Spectre de Néon",
        description: "Une entitée insaisissable quihante le réseau.",
        img: "./images/card3.png",
        price:  25.50 ,
        rarety: "Lengendary",

    },
    {
        id: 4,
        name: "Chimère des Étoiles",
        description: "Une fusion de bêtes imprévisible.",
        img: "./images/card4.png",
        price:  25.50 ,
        rarety: "Rare",

    },
    {
        id: 5,
        name: "Phénix Binaire",
        description: "Renaissant de ses cendres numériques à chaque défaite.",
        img: "./images/card5.png",
        price:  25.50 ,
        rarety: "épic",

    },
    {
        id: 6,
        name: "Golem de Quantum",
        description: "Un colosse instable,capable de manipuler la réalité.",
        img: "./images/card6.png",
        price:  25.50 ,
        rarety: "Lengendary",

    },
    {
        id: 7,
        name: "Sentinelle Cybernétique",
        description: "Une défenseuse avec le feux de tech. ",
        img: "./images/card11.png",
        price:  25.50 ,
        rarety: "épic",

    },
    {
        id: 8,
        name: "Void Witch",
        description: "Une créature de pure énergie.",
        img: "./images/card2.png",
        price:  25.50 ,
        rarety: "Commun",

    },
    {
        id: 9,
        name: "Spectre de Néon",
        description: "Une entitée insaisissable quihante le réseau.",
        img: "./images/card3.png",
        price:  25.50 ,
        rarety: "Lengendary",

    },
    {
        id: 10,
        name: "Chimère des Étoiles",
        description: "Une fusion de bêtes imprévisible.",
        img: "./images/card4.png",
        price:  25.50 ,
        rarety: "Rare",

    },
    {
        id: 11,
        name: "Phénix Binaire",
        description: "Renaissant de ses cendres numériques à chaque défaite.",
        img: "./images/card5.png",
        price:  25.50 ,
        rarety: "épic",

    },
    {
        id: 12,
        name: "Golem de Quantum",
        description: "Un colosse instable,capable de manipuler la réalité.",
        img: "./images/card6.png",
        price:  25.50 ,
        rarety: "Lengendary",

    },
    {
        id: 13,
        name: "Sentinelle Cybernétique",
        description: "Une défenseuse avec le feux de tech. ",
        img: "./images/card11.png",
        price:  25.50 ,
        rarety: "épic",

    },
    {
        id: 14,
        name: "Void Witch",
        description: "Une créature de pure énergie.",
        img: "./images/card2.png",
        price:  25.50 ,
        rarety: "Commun",

    },
    {
        id: 15,
        name: "Spectre de Néon",
        description: "Une entitée insaisissable quihante le réseau.",
        img: "./images/card3.png",
        price:  25.50 ,
        rarety: "Lengendary",

    },
    {
        id: 16,
        name: "Chimère des Étoiles",
        description: "Une fusion de bêtes imprévisible..",
        img: "./images/card4.png",
        price:  25.50 ,
        rarety: "Rare",

    },
    {
        id: 17,
        name: "Phénix Binaire",
        description: "Renaissant de ses cendres numériques à chaque défaite.",
        img: "./images/card5.png",
        price:  25.50 ,
        rarety: "épic",

    },
    {
        id: 18,
        name: "Golem de Quantum",
        description: "Un colosse instable,capable de manipuler la réalité.",
        img: "./images/card6.png",
        price:  25.50 ,
        rarety: "Lengendary",

    },

]

const container = document.getElementById("cardsContainer")

let currentIndex = 0;
const cardsPerPage = 6;

// --- AFFICHAGE CARDS ---
function cardsAfficher(index) {
    container.innerHTML = "";
    for (let i = index; i < index + cardsPerPage && i < cards.length; i++) {
        container.innerHTML += `
            <div class="text-center">
                <img src="${cards[i].img}" alt="cardPic" class="w-[20vw]">
                <div class="grid grid-rows-4 bg-cards font-tet p-[8px] text-white text-left h-80 border-l-2 border-r-2 border-b-2 border-[#7B2CBF]">
                    <h3 class="text-[25px]">${cards[i].name}</h3>
                    <div class="flex flex-col gap-[20px] h-[60px]">
                        <p class="w-[80%] font-display">${cards[i].description}</p>
                        <span>1/100</span>
                    </div>
                    <p class="flex items-end pb-[10px]">${cards[i].price} €</p>
                    <div class="flex justify-between h-[50px]">
                        <button class="bg-btn hover:bg-purple-500 px-2 py-1 rounded-lg font-tet">
                            Ajouter au panier
                        </button>
                        <button class="rounded-lg bg-btn2 px-4 hover:bg-gray-400 transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" class="w-5 h-5 opacity-70">
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    updateActiveButton();
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
// --- PAGINATION BUTTONS ---
const pageButtons = document.querySelectorAll(".page-btn");

pageButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index * cardsPerPage;
        cardsAfficher(currentIndex);
    });
});
nextBtn.addEventListener("click", () => {
    if (currentIndex + cardsPerPage < cards.length) {
        currentIndex += cardsPerPage;
        cardsAfficher(currentIndex);
    }
});
prevBtn.addEventListener("click", () => {
    if (currentIndex - cardsPerPage >= 0) {
        currentIndex -= cardsPerPage;
        cardsAfficher(currentIndex);
    }
});
function updateActiveButton() {
    pageButtons.forEach(btn => {
        btn.classList.remove("bg-purple-600");
        btn.classList.add("bg-btn");
    });

    const activePage = Math.floor(currentIndex / cardsPerPage);
    pageButtons[activePage].classList.remove("bg-btn");
    pageButtons[activePage].classList.add("bg-purple-600");
}

cardsAfficher(0);




