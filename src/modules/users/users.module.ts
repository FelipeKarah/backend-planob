import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/create-user/create-user.controller';
import { CreateUserService } from './use-cases/create-user/create-user.service';
import { UpdateUserService } from './use-cases/update-user/update-user.service';
import { UpdateUserController } from './use-cases/update-user/update-user.controller';
import { DeleteUserController } from './use-cases/delete-user/delete-user.controller';
import { DeleteUserService } from './use-cases/delete-user/delete-user.service';
import { FindAllUsersService } from './use-cases/find-all-users/find-all-users.service';
import { FindAllUsersController } from './use-cases/find-all-users/find-all-users.controller';
import { PrismaService } from 'src/shared/services/prisma.service';
import { RolesGuard } from '../../helpers/guards/roles.guard';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
    FindAllUsersController,
  ],
  providers: [
    PrismaService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    FindAllUsersService,
    RolesGuard
  ],
})
export class UsersModule {}
