import { Controller, Get, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get(':id')
  //   findOne(@Param() params: any): string {
  //     console.log(params, 'params');
  //     return `This action returns a #${params.id} dog`;
  //   }
  async findOne(@Param('id') id: string): Promise<string> {
    // use async/await to handle asynchronous operations
    console.log(id, 'id');
    return `This action returns a #${id} dog`;
  }
}
// @Params() decorator is used to extract parameters from the request URL. It returns an object with the key-value pairs of the URL parameters.
