// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Product Filter Functionality
function filterProducts(products, criteria) {
    return products.filter(product => {
        let matches = true;
        for (const key in criteria) {
            if (criteria[key] && product[key] !== criteria[key]) {
                matches = false;
                break;
            }
        }
        return matches;
    });
}

// Wishlist Functionality
class Wishlist {
    constructor() {
        this.items = [];
    }

    addToWishlist(product) {
        if (!this.items.some(item => item.id === product.id)) {
            this.items.push(product);
        }
    }

    removeFromWishlist(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }
}