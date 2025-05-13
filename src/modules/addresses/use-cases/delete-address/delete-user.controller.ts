import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { DeleteAddressService } from './delete-user.service';

@Controller()
export class DeleteAddressController {
  constructor(private readonly deleteAddressService: DeleteAddressService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(AddressRoleEnum.ADMIN)
  // @Delete('/addresses/:id')
  // handle(@Param('id') id: string) {
  //   return this.deleteAddressService.execute(id);
  // }
}
