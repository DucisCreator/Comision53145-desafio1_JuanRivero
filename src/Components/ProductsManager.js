class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.error("Ya existe un producto con el mismo código.");
            return;
        }

        this.lastId++;

        const newProduct = {
            id: this.lastId,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock
        };
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
        }
    }
}

export default ProductManager;