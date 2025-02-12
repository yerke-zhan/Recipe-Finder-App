
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        {
            name: "Avocado Toast",
            description: "Fresh avocado served on toasted whole-grain bread with a sprinkle of red pepper flakes and a drizzle of olive oil.",
            preparation: "Toast the bread, then mash the avocado and spread it on top. Sprinkle red pepper flakes and drizzle with olive oil.",
            image: "images/avocado.jpg"
            
        },
        {
            name: "Greek Yogurt Parfait",
            description: "Layered Greek yogurt with fresh berries, granola, and a hint of honey.",
            preparation: "Layer Greek yogurt with fresh berries and granola, then drizzle honey on top.",
            image: "images/greek-yogurt-parfait.jpg"
        },
        {
            name: "Oatmeal with Berries",
            description: "Creamy oatmeal topped with a variety of fresh berries and a dollop of whipped cream.",
            preparation: "Cook oatmeal and top with fresh berries and whipped cream.",
            image: "images/oatmeal-with-berries.jpg"
        }
    ];

    const menuItemsContainer = document.getElementById("menu-items");

    menuItems.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");

        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.name;

        const h4Element = document.createElement("h4");
        h4Element.textContent = item.name;

        const pElement = document.createElement("p");
        pElement.textContent = item.description;

        const buttonElement = document.createElement("button");
        buttonElement.textContent = "Read More";

        
        menuItemElement.appendChild(imgElement);
        menuItemElement.appendChild(h4Element);
        menuItemElement.appendChild(pElement);
        menuItemElement.appendChild(buttonElement);

        buttonElement.addEventListener("click", () => {
        const prepElement = document.createElement("p");
        prepElement.textContent = `Preparation: ${item.preparation}`;

            
            menuItemElement.removeChild(buttonElement);
            menuItemElement.removeChild(pElement);
            menuItemElement.appendChild(prepElement);
        });

        
        menuItemsContainer.appendChild(menuItemElement);
    });
});
