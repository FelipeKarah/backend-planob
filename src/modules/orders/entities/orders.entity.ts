import { instanceToPlain } from 'class-transformer';
import { Purchase as PurchaseModel } from '@prisma/client';

export class Purchase implements PurchaseModel {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  id: string;
  supplierId: string;
  purchaseDate: Date;
  paymentDate: Date;
  inPay: boolean;
  inBilletGenerated: boolean;
  status: string;

  toJSON() {
    return instanceToPlain(this);
  }
}
