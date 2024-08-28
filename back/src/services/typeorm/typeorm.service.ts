import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      //host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yami1234',
      database: 'db_movies',
      entities: ['dist/**/*.model.{ts.js}'],
    };
  }
}
