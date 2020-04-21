import {
  repository,
} from '@loopback/repository';
import {
  // param,
  // get,
  // getModelSchemaRef,
} from '@loopback/rest';
import {
  // Cases,
  // Solutions,
} from '../models';
import {CasesRepository} from '../repositories';

export class CasesSolutionsController {
  constructor(
    @repository(CasesRepository)
    public casesRepository: CasesRepository,
  ) { }

  // @get('/cases/{id}/solutions', {
  //   responses: {
  //     '200': {
  //       description: 'Solutions belonging to Cases',
  //       content: {
  //         'application/json': {
  //           schema: {type: 'array', items: getModelSchemaRef(Solutions)},
  //         },
  //       },
  //     },
  //   },
  // })
  // async getSolutions(
  //   @param.path.number('id') id: typeof Cases.prototype.id,
  // ): Promise<Solutions> {
  //   return this.casesRepository.solutionId(id);
  // }
}
