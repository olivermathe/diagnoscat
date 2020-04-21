import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Cases, CasesRelations, Replies, Solutions} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {RepliesRepository} from './replies.repository';
import {SolutionsRepository} from './solutions.repository';

export class CasesRepository extends DefaultCrudRepository<
  Cases,
  typeof Cases.prototype.id,
  CasesRelations
> {

  public readonly replies: HasManyRepositoryFactory<Replies, typeof Cases.prototype.id>;

  public readonly solutionId: BelongsToAccessor<Solutions, typeof Cases.prototype.id>;

  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource, @repository.getter('RepliesRepository') protected repliesRepositoryGetter: Getter<RepliesRepository>, @repository.getter('SolutionsRepository') protected solutionsRepositoryGetter: Getter<SolutionsRepository>,
  ) {
    super(Cases, dataSource);
    this.solutionId = this.createBelongsToAccessorFor('solutionId', solutionsRepositoryGetter,);
    this.registerInclusionResolver('solutionId', this.solutionId.inclusionResolver);
    this.replies = this.createHasManyRepositoryFactoryFor('replies', repliesRepositoryGetter,);
    this.registerInclusionResolver('replies', this.replies.inclusionResolver);
  }
}
