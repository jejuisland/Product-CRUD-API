"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.product = [
            { id: 1, name: 'Coke', price: 10 },
            { id: 2, name: 'Sprite', price: 12 }
        ];
    }
    findAllProducts() {
        return this.product;
    }
    findOneProducts(id) {
        return this.product.find((product => product.id == id));
    }
    create(product) {
        var lastIndexofProduct;
        this.product.forEach(function (i, idx, array) {
            if (idx === array.length - 1) {
                lastIndexofProduct = i.id + 1;
            }
        });
        const newProduct = Object.assign({ id: lastIndexofProduct }, product);
        this.product.push(newProduct);
        return newProduct;
    }
    update(productId, product) {
        const updateProduct = Object.assign({ id: productId }, product);
        this.product.push(updateProduct);
        return updateProduct;
    }
    findAll() {
        return this.product;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map