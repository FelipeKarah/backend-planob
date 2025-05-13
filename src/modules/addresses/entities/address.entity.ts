import { Address as AddressModel } from '@prisma/client';
import { instanceToPlain } from 'class-transformer';

export class Address implements AddressModel {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  id: string;
  userId: string;
  cep: number;
  road: string;
  place: string;
  number: number;
  district: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  status: string;
  inDelivery: boolean;

  toJSON() {
    return instanceToPlain(this);
  }
}
