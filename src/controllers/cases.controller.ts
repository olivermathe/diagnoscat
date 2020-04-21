import {
  // Count,
  // CountSchema,
  // Filter,
  // FilterExcludingWhere,
  repository,
  // Where,
} from '@loopback/repository';
import {
  post,
  // param,
  // get,
  getModelSchemaRef,
  // patch,
  // put,
  // del,
  requestBody,
} from '@loopback/rest';
import {Cases} from '../models';
import {CasesRepository} from '../repositories';

export class CasesController {
  constructor(
    @repository(CasesRepository)
    public casesRepository : CasesRepository,
  ) {}

  @post('/cases', {
    responses: {
      '200': {
        description: 'Cases model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cases)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cases, {
            title: 'NewCases',

          }),
        },
      },
    })
    cases: Cases,
  ): Promise<Cases> {

    const casesFound = await this.casesRepository.find()
    console.log(casesFound)
    return this.casesRepository.create(cases);
  }

  // @get('/cases/count', {
  //   responses: {
  //     '200': {
  //       description: 'Cases model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async count(
  //   @param.where(Cases) where?: Where<Cases>,
  // ): Promise<Count> {
  //   return this.casesRepository.count(where);
  // }

  // @get('/cases', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Cases model instances',
  //       content: {
  //         'application/json': {
  //           schema: {
  //             type: 'array',
  //             items: getModelSchemaRef(Cases, {includeRelations: true}),
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(Cases) filter?: Filter<Cases>,
  // ): Promise<Cases[]> {
  //   return this.casesRepository.find(filter);
  // }

  // @patch('/cases', {
  //   responses: {
  //     '200': {
  //       description: 'Cases PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Cases, {partial: true}),
  //       },
  //     },
  //   })
  //   cases: Cases,
  //   @param.where(Cases) where?: Where<Cases>,
  // ): Promise<Count> {
  //   return this.casesRepository.updateAll(cases, where);
  // }

  // @get('/cases/{id}', {
  //   responses: {
  //     '200': {
  //       description: 'Cases model instance',
  //       content: {
  //         'application/json': {
  //           schema: getModelSchemaRef(Cases, {includeRelations: true}),
  //         },
  //       },
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.number('id') id: number,
  //   @param.filter(Cases, {exclude: 'where'}) filter?: FilterExcludingWhere<Cases>
  // ): Promise<Cases> {
  //   return this.casesRepository.findById(id, filter);
  // }

  // @patch('/cases/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Cases PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Cases, {partial: true}),
  //       },
  //     },
  //   })
  //   cases: Cases,
  // ): Promise<void> {
  //   await this.casesRepository.updateById(id, cases);
  // }

  // @put('/cases/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Cases PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() cases: Cases,
  // ): Promise<void> {
  //   await this.casesRepository.replaceById(id, cases);
  // }

  // @del('/cases/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Cases DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.casesRepository.deleteById(id);
  // }
}
