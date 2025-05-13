import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/helpers/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';
import { FindAllUsersService } from './find-all-users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class FindAllUsersController {
  constructor(private readonly findAllUsersService: FindAllUsersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  @ApiTags('Users')
  @Get('/users')
  handle() {
    return this.findAllUsersService.execute();
  }
}
