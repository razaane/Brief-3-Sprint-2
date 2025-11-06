// Get cart and collection from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let collection = JSON.parse(localStorage.getItem("collection")) || [];

const container = document.getElementById("cartContainer");
const totalDiv = document.getElementById("cartTotal");

// Function to render cart
function renderCart() {
    container.innerHTML = "";
    if(cart.length === 0){
        container.innerHTML = `<p class="col-span-full text-center text-white text-lg">Votre panier est vide.</p>`;
        totalDiv.textContent = "";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("text-center", "bg-cards", "p-4", "rounded-lg");

        cardDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="w-[20vw] mx-auto mb-2">
            <h3 class="text-lg font-bold mb-1">${item.name}</h3>
            <p class="mb-2">Prix: ${item.price} €</p>
            <p class="mb-2">Quantité: ${item.quantity}</p>
            <div class="flex justify-center gap-2">
                <button class="bg-green-600 hover:bg-green-500 px-3 py-1 rounded buy-btn" data-id="${item.id}">
                    Acheter
                </button>
                <button class="bg-red-600 hover:bg-red-500 px-3 py-1 rounded remove-btn" data-id="${item.id}">
                    Supprimer
                </button>
            </div>
        `;

        total += item.price * item.quantity;
        container.appendChild(cardDiv);
    });

    totalDiv.textContent = `Total: ${total.toFixed(2)} €`;

    // Attach remove event
    const deleteButtons = container.querySelectorAll(".remove-btn");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            removeFromCart(id);
        });
    });

    // Attach buy event
    const buyButtons = container.querySelectorAll(".buy-btn");
    buyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            buyCard(id);
        });
    });
}

// Function to remove item from cart
function removeFromCart(id){
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Function to buy a card
function buyCard(id){
    const item = cart.find(c => c.id === id);
    if(!item) return;

    // Add to collection
    collection.push(item);
    localStorage.setItem("collection", JSON.stringify(collection));

    // Remove from cart
    removeFromCart(id);

    alert(`${item.name} a été ajouté à votre collection !`);
}

// Initial render
renderCart();
