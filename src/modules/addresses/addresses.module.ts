import { Module } from '@nestjs/common';
import { CreateAddressController } from './use-cases/create-address/create-address.controller';
import { CreateAddressService } from './use-cases/create-address/create-address.service';
import { UpdateAddressService } from './use-cases/update-address/update-address.service';
import { UpdateAddressController } from './use-cases/update-address/update-address.controller';
import { DeleteAddressController } from './use-cases/delete-address/delete-user.controller';
import { DeleteAddressService } from './use-cases/delete-address/delete-user.service';
import { FindAllAddressesService } from './use-cases/find-all-addresses/find-all-addresses.service';
import { FindAllAddressesController } from './use-cases/find-all-addresses/find-all-addresses.controller';
import { PrismaService } from 'src/shared/services/prisma.service';
import { RolesGuard } from '../../helpers/guards/roles.guard';

@Module({
  controllers: [
    CreateAddressController,
    UpdateAddressController,
    DeleteAddressController,
    FindAllAddressesController,
  ],
  providers: [
    PrismaService,
    CreateAddressService,
    UpdateAddressService,
    DeleteAddressService,
    FindAllAddressesService,
    RolesGuard,
  ],
})
export class AddressesModule {}
