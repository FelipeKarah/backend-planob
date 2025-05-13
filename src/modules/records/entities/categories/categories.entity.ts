import { Category as CategoryModel } from '@prisma/client';
import { instanceToPlain } from 'class-transformer';

export class Category implements CategoryModel {
  constructor(data?: any) {
    Object.assign(this, data);
  }
  id: string;
  name: string;
  bannerUrl: string;
  status: string;

  updatedAt: Date;
  createdAt: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}
