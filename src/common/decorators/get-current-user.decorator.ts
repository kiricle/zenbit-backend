import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { JwtPayloadWithRefreshToken } from 'src/auth/types';

export const GetCurrentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefreshToken | undefined,
    context: ExecutionContext,
  ): number => {
    const request = context.switchToHttp().getRequest();

    if (!data) return request['sub'];

    return request[data];
  },
);
