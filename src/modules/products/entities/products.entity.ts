import { Product as ProductModel } from '@prisma/client';
import { instanceToPlain } from 'class-transformer';

export class Product implements ProductModel {
  constructor(data?: Partial<ProductModel>) {
    Object.assign(this, data);
  }

  id: string;
  name: string;
  cod: number;
  status: string;
  brand: string;
  type: string;
  unit: string;
  baseCost: number;
  retailPrice: number;
  retailMargin: number;
  wholesalePrice: number;
  minWholesaleQty: number;
  wholesaleMargin: number;
  bulkPrice: number;
  minBulkQty: number;
  bulkMargin: number;
  promoPrice: number | null;
  promoStart: Date | null;
  promoEnd: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}