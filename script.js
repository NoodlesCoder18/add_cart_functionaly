document.addEventListener("DOMContentLoaded", function () {
    const cardOptions = document.querySelectorAll(".card-option");
    const totalDisplay = document.querySelector(".total");
    const addToCartBtn = document.querySelector(".add-to-cart");

    if (!cardOptions.length || !totalDisplay || !addToCartBtn) {
        console.error("Required elements not found!");
        return;
    }
    cardOptions.forEach(card => {
        card.addEventListener("click", function (e) {
            if (e.target.closest('select')) {
                return;
            }

            const radio = card.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }

            const amount = card.querySelector(".amount");
            if (amount) {
                totalDisplay.textContent = `Total: ${amount.textContent.trim()}`;
            }
        });
    });

    addToCartBtn.addEventListener("click", function () {
        const selectedCard = document.querySelector('.card-option input[type="radio"]:checked');
        
        if (!selectedCard) {
            alert("Please select an option before adding to cart!");
            return;
        }
        const card = selectedCard.closest('.card-option');
        const title = card.querySelector('.title').textContent;
        const price = card.querySelector('.amount').textContent;
        alert(`Added to Cart Successfully!\n\n${title}\n${price}`);
                addToCartBtn.textContent = "Added!";
        setTimeout(() => {
            addToCartBtn.textContent = "+ Add to Cart";
        }, 2000);
    });
});
