import { Product } from 'entities/product.entities';
import { UpdateProduct } from 'entities/product.update.entities';
import { ProductInterface } from 'interfaces/product.interface';
import { ProductUpdateInterface } from 'interfaces/product.update.interface';
export declare class AppService {
    product: Product[];
    findAllProducts(): Product[];
    findOneProducts(id: number): Product;
    create(product: Product): ProductInterface;
    update(productId: number, product: UpdateProduct): ProductUpdateInterface;
    findAll(): ProductInterface[];
}
