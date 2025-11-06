const collectionContainer = document.getElementById("collectionContainer");
let collection = JSON.parse(localStorage.getItem("collection")) || [];

function renderCollection() {
    collectionContainer.innerHTML = "";

    if (collection.length === 0) {
        collectionContainer.innerHTML = `<p class="col-span-full text-center text-white text-lg">Vous n'avez pas encore de cartes dans votre collection.</p>`;
        return;
    }

    collection.forEach(c => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("text-center", "bg-cards", "p-4", "rounded-lg", "flex", "flex-col", "items-center");

        cardDiv.innerHTML = `
            <img src="${c.img}" alt="${c.name}" class="w-full max-w-[200px] h-48 object-cover mb-2">
            <h3 class="text-lg font-display font-bold mb-1">${c.name}</h3>
            <p class="mb-2 font-tet">${c.description || ''}</p>
            <p class="mb-2 font-tet">${c.price} €</p>
        `;

        collectionContainer.appendChild(cardDiv);
    });
}

renderCollection();
