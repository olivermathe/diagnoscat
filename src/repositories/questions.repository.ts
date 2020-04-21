import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Questions, QuestionsRelations, Replies} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RepliesRepository} from './replies.repository';

export class QuestionsRepository extends DefaultCrudRepository<
  Questions,
  typeof Questions.prototype.id,
  QuestionsRelations
> {

  public readonly replies: HasManyRepositoryFactory<Replies, typeof Questions.prototype.id>;

  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource, @repository.getter('RepliesRepository') protected repliesRepositoryGetter: Getter<RepliesRepository>,
  ) {
    super(Questions, dataSource);
    this.replies = this.createHasManyRepositoryFactoryFor('replies', repliesRepositoryGetter,);
  }
}
