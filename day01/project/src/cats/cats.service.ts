import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getIndex(): string {
    return 'ee';
  }
}
