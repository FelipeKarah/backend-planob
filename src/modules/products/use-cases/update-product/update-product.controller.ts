import { Body, Controller, Param, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { UpdateProductService } from './update-product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller()
export class UpdateProductController {
  constructor(private readonly updateProductService: UpdateProductService) {}

  @Put('/products/:id')
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
            callback(null, uuid.v4() + '.' + extension);
          },
        }),
      }),
    )
  handle(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto,  @UploadedFile() file: Express.Multer.File) {

    console.log('aquiiiiiiiiiiiiiiii')
    const generatedFilename = file.filename;

    return this.updateProductService.execute(id, updateProductDto, generatedFilename);
  }
}
