import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { Roles } from 'src/helpers/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';
import { DeleteUserService } from './delete-user.service';

@Controller()
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(UserRoleEnum.ADMIN)
  // @Delete('/users/:id')
  // handle(@Param('id') id: string) {
  //   return this.deleteUserService.execute(id);
  // }
}
