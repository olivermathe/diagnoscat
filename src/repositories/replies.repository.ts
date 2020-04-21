import {DefaultCrudRepository} from '@loopback/repository';
import {Replies, RepliesRelations} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RepliesRepository extends DefaultCrudRepository<
  Replies,
  typeof Replies.prototype.id,
  RepliesRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Replies, dataSource);
  }
}
