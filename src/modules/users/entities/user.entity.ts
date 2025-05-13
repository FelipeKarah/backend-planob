import { ApiProperty } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { Exclude, instanceToPlain } from 'class-transformer';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';

export class User implements UserModel {
  constructor(data?: any) {
    Object.assign(this, data);
  }
  id: string;
  firstName: string;
  lastName: string;
  cpf_cnpj: number;
  email: string;

  @Exclude()
  password: string;
  status: string;

  telephone: number;
  cell: number;
  role: UserRoleEnum;

  updatedAt: Date;
  createdAt: Date;

  toJSON() {
    return instanceToPlain(this);
  }
}
