import { Supplier as SupplierModel } from '@prisma/client';
import { instanceToPlain } from 'class-transformer';

export class Supplier implements SupplierModel {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  id: string;
  name: string;
  bannerUrl: string;
  cnpj: string;
  telephone: number;
  email: string;
  categoryId: string;
  status: string;

  updatedAt: Date;
  createdAt: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}
