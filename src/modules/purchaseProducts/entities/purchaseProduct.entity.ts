import { instanceToPlain } from 'class-transformer';
import { PurchaseProducts as PurchaseProductModel } from '@prisma/client';

export class PurchaseProducts implements PurchaseProductModel {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  id: string;
  purchaseId: string;
  productId: string;
  amount: number;
  unitaryValue: number;
  discountValue: number;
  status: string;

  toJSON() {
    return instanceToPlain(this);
  }
}
