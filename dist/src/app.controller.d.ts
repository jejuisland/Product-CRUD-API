import { CreateProductDto } from 'dto/product.dto';
import { UpdateProductDto } from 'dto/update.product.dto';
import { Product } from 'entities/product.entities';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findOne(productId: number): Product;
    create(createProductDto: CreateProductDto): Promise<import("../interfaces/product.interface").ProductInterface>;
    findAllProduct(): Product[];
    update(productId: number, post: UpdateProductDto): Promise<import("../interfaces/product.update.interface").ProductUpdateInterface>;
}
