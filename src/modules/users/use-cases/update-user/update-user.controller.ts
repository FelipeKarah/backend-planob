import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UpdateUserService } from './update-user.service';

@Controller()
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  // @Put('/users/:id')
  // handle(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.updateUserService.execute(id, updateUserDto);
  // }
}
