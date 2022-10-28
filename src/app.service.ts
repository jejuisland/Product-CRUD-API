import { Injectable } from '@nestjs/common';
import { Product } from 'entities/product.entities';
import { UpdateProduct } from 'entities/product.update.entities';
import { ProductInterface } from 'interfaces/product.interface';
import { ProductUpdateInterface } from 'interfaces/product.update.interface';

@Injectable()
export class AppService {
  public product: Product[] = [
    { id: 1, name: 'Coke', price: 10 },
    { id: 2, name: 'Sprite', price: 12 }
  ];

  findAllProducts(): Product[] {
    return this.product;
  }

  findOneProducts(id: number): Product {
    return this.product.find((product => product.id == id));
  }

  create(product: Product): ProductInterface {
    var lastIndexofProduct: any;
    this.product.forEach(function (i, idx, array) {
      if (idx === array.length - 1) {
        lastIndexofProduct = i.id + 1
      }
    });
    const newProduct = { id: lastIndexofProduct, ...product };
    this.product.push(newProduct);
    return newProduct;
  }

  update(productId: number, product: UpdateProduct,): ProductUpdateInterface {
    var updateProduct: any;
    var dataProducts = this.findOneProducts(productId);
    this.product.forEach((item, index, arr) => {
      if (dataProducts.id === item.id) {
        arr.splice(index, 1);
        updateProduct = { id: productId, ...product };
        this.product.push(updateProduct);
      }
    });
    return updateProduct;
  }

  findAll(): ProductInterface[] {
    return this.product;
  }
}

