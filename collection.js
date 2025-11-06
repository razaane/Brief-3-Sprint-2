// collection.js
const collectionContainer = document.getElementById("collectionContainer");

// Get collection from localStorage
let collection = JSON.parse(localStorage.getItem("collection")) || [];

// Render collection cards
function renderCollection() {
    collectionContainer.innerHTML = "";

    if(collection.length === 0){
        collectionContainer.innerHTML = `<p class="col-span-full text-center text-white text-lg">Vous n'avez pas encore de cartes dans votre collection.</p>`;
        return;
    }

    collection.forEach(c => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("text-center");

        cardDiv.innerHTML = `
            <img src="${c.img}" alt="${c.name}" class="w-[20vw] mx-auto">
            <div class="grid grid-rows-4 bg-cards font-tet p-2 text-white text-left h-80 border-l-2 border-r-2 border-b-2 border-[#7B2CBF]">
                <h3 class="text-[25px]">${c.name}</h3>
                <div class="flex flex-col gap-[20px] h-[60px]">
                    <p class="w-[80%] font-display">${c.description}</p>
                    <span>1/100</span>
                </div>
                <p class="flex items-end pb-[10px]">${c.price} €</p>
            </div>
        `;

        collectionContainer.appendChild(cardDiv);
    });
}

// Initial render
renderCollection();
