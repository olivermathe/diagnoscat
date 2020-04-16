import {DefaultCrudRepository} from '@loopback/repository';
import {Cases, CasesRelations} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CasesRepository extends DefaultCrudRepository<
  Cases,
  typeof Cases.prototype.id,
  CasesRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Cases, dataSource);
  }
}
