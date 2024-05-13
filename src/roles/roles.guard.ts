import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {} // Helper class
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user ?? ['admin']; // Test purpose
    const matchRoles = (roles: string[], userRoles: string[]) => {
      let check = false;
      roles.forEach((element) => {
        if (userRoles.includes(element)) {
          check = true;
        }
      });
      return check;
    };
    // return matchRoles(roles, user.roles);
    return matchRoles(roles, user);
  }
}
