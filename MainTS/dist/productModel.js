export class Product {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getInformation() {
        return [this.title, `$${this.price}`];
    }
}
//# sourceMappingURL=productModel.js.map