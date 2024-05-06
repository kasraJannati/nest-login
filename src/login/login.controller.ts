import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('login') // @controller decorator
export class LoginController {
  @Get() // http method decorator
  // @Get('admin')http method decorator with a path prefix
  findAll(@Req() request: Request): string {
    console.log(request, 'request');
    // @Req() decorator to access the request object
    // method that returns a string
    return 'This action returns all logins';
  }
}
// @Req() decorator to access the request object
// @Res() decorator to access the response object - you put nest into Library-specific mode
// @Next() decorator to access the next function
// @Session() decorator to access the session object - req.session
// @Param(key?: string) decorator to access a single parameter - req.params[key]/req.params
// @Body(key?: string) decorator to access the request body - req.body/req.body[key] // request payload
// @Query(key?: string) decorator to access the query string - req.query[key]/req.query
// @Headers(name?: string) decorator to access the request headers - req.headers[name]/req.headers
// @Ip() decorator to access the request IP address - req.ip
// @HostParam() decorator to access the host parameter - req.hosts
