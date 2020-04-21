import {DefaultCrudRepository} from '@loopback/repository';
import {Solutions, SolutionsRelations} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SolutionsRepository extends DefaultCrudRepository<
  Solutions,
  typeof Solutions.prototype.id,
  SolutionsRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Solutions, dataSource);
  }
}
