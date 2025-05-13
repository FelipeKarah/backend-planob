import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from '../../dto/create-product.dto';
import { CreateProductService } from './create-product.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller()
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post('/products')
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
  @ApiTags('Products')
  handle(@Body() createProductDto: CreateProductDto[],  @UploadedFile() file: Express.Multer.File) {

    console.log('file.filename', file.filename)
    const generatedFilename = file.filename;

    return this.createProductService.execute(createProductDto, generatedFilename);
  }
}
