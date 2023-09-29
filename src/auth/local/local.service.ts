import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalService extends PassportStrategy(Strategy){

    constructor() {
      super();
    }
    async validate(username: string, password: string) {
       
      }
}
