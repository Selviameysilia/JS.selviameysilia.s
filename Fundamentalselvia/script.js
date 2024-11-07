    const drinks = [
        {
            name: "Citrus Mojito",
            description: "A refreshing blend of citrus fruits and mint.",
            price: 4.99,
            image: "https://th.bing.com/th?id=OSK.d702f2d42f790c2c6c115e62907223db&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
            inStock: true,
            popularity: [5, 4, 4, 5], 
            id: BigInt(1),
            tags: Symbol("drink"), 
            details: null 
        },
        {
            name: "Berry Smoothie",
            description: "A delicious mix of strawberries, blueberries, and raspberries.",
            price: 6.50,
            image: "https://th.bing.com/th?id=OSK.e7cf091a085b5e382e65726f2acf483b&w=164&h=246&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
            inStock: false,
            popularity: [3, 4, 3, 4],
            id: BigInt(2),
            tags: Symbol("smoothie"),
            details: null
        },
        {
            name: "Iced Coffee",
            description: "Cold brewed coffee served with ice and milk.",
            price: 3.99,
            image: "https://th.bing.com/th/id/OIP.30SrnEmKImjeoJUH4f1DrQHaJZ?w=186&h=235&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            inStock: true,
            popularity: [4, 4, 4, 4],
            id: BigInt(3),
            tags: Symbol("coffee"),
            details: null
        },
        {
            name: "Matcha Latte",
            description: "Creamy and energizing green tea latte.",
            price: 5.50,
            image: "https://www.livveganstrong.com/wp-content/uploads/2022/09/oat-milk-matcha-latte-4-1024x1536.jpg",
            inStock: true,
            popularity: [5, 5, 4, 5],
            id: BigInt(4),
            tags: Symbol("latte"),
            details: null
        },
        {
            name: "Tropical Punch",
            description: "A mix of tropical fruits for a taste of paradise.",
            price: 4.75,
            image: "https://www.bing.com/th?id=OIP.QdD5UTq6vQvh8wiJpTM6FQAAAA&w=146&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            inStock: false,
            popularity: [4, 5, 4, 4],
            id: BigInt(5),
            tags: Symbol("punch"),
            details: null
        },
    ];

    // Function to log data types
    // Function to log data types and example values
    function logDataTypes(drink) {
        console.log(`Name (String): ${typeof drink.name} - Example: "${drink.name}"`);
        console.log(`Description (String): ${typeof drink.description} - Example: "${drink.description}"`);
        console.log(`Price (Number): ${typeof drink.price} - Example: ${drink.price}`);
        console.log(`Image (String): ${typeof drink.image} - Example: "${drink.image}"`);
        console.log(`In Stock (Boolean): ${typeof drink.inStock} - Example: ${drink.inStock}`);
        console.log(`Popularity (Array): ${Array.isArray(drink.popularity)} - Example: [${drink.popularity.join(", ")}]`);
        console.log(`ID (BigInt): ${typeof drink.id} - Example: ${drink.id}`);
        console.log(`Tags (Symbol): ${typeof drink.tags} - Example: ${drink.tags.toString()}`);
        console.log(`Details (null): ${drink.details === null ? "null" : typeof drink.details} - Example: ${drink.details}`);
    }

    // Function to render drink cards
    function renderDrinks() {
        const container = document.getElementById("drink-cards");
        
        drinks.forEach(drink => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${drink.image}" alt="${drink.name}">
                <div class="card-content">
                    <h3>${drink.name}</h3>
                    <p>${drink.description}</p>
                    <p>Price: $${drink.price}</p>
                    <p>In Stock: ${drink.inStock ? "Yes" : "No"}</p>
                    <button onclick="handleButtonClick(${drinks.indexOf(drink)})">Pesan</button>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Button click handler
    function handleButtonClick(index) {
        alert(`Displaying data types for ${drinks[index].name} in the console.`);
        logDataTypes(drinks[index]);
    }

    // Initialize rendering
    renderDrinks();
