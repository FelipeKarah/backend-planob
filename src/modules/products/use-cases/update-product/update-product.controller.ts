import { Body, Controller, Param, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { UpdateProductService } from './update-product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { UserRoleEnum } from 'src/utils/enums/user-role.enum';
import { Roles } from 'src/helpers/decorators/roles.decorator';

@Controller()
export class UpdateProductController {
  constructor(private readonly updateProductService: UpdateProductService) {}

  @Put('/products/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: (req, file, callback) => {
            const uploadPath = `./${process.env.DESTINATION_DOCUMENT_UPLOAD}/products/`;
            fs.mkdirSync(uploadPath, { recursive: true });
  
            callback(null, uploadPath);
          },
          filename: (req, file, callback) => {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const uuid = require('uuid');
            const extension = file.mimetype.split('/')[1];
            callback(null, (req.body.cod ?? uuid.v4()) + '.' + extension);
          },
        }),
      }),
    )
  handle(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto,  @UploadedFile() file: Express.Multer.File) {

    const generatedFilename = file.filename;
    return this.updateProductService.execute(id, updateProductDto, generatedFilename);
  }
}
