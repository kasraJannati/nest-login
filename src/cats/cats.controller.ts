import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './create-cate.dto';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // The reposnse status code is always 200 by default, except for POST requests, which are 201.
  // You can override this behavior by using the @HttpCode() decorator.
  @HttpCode(204)
  @Header('Cache-Control', 'none') // To specify a custom response header
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto, 'createCatDto');
    this.catsService.create(createCatDto);
  }

  @Get()
  // @Redirect('https://nestjs.com', 302) // Redirects to the specified URL
  // getDocs(@Query('version') version: string) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto, 'id');
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

// HTTP request method decorators
// @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All()
// @Get() decorator creates a route handler for the GET /cats endpoint. It is used to fetch a resource.
// @Post() decorator creates a route handler for the POST /cats endpoint. It is used to create a new resource.
// @Put() decorator creates a route handler for the PUT /cats endpoint. It is used to update a resource.
// @Delete() decorator creates a route handler for the DELETE /cats endpoint. It is used to delete a resource.
// @Patch() decorator creates a route handler for the PATCH /cats endpoint. It is used to update a resource
// The difference between PUT and PATCH is that PUT updates the entire resource, while PATCH updates only the specified fields.
// @Options() decorator creates a route handler for the OPTIONS /cats endpoint. It is used to get the supported HTTP methods for a resource.
// @Head() decorator creates a route handler for the HEAD /cats endpoint. It is used to get the headers of a resource.
// @All() decorator creates a route handler for all HTTP methods. It is used to handle all HTTP methods for a resource.
