import {
  // Count,
  // CountSchema,
  // Filter,
  repository,
  // Where,
} from '@loopback/repository';
import {
  // del,
  // get,
  // getModelSchemaRef,
  // getWhereSchemaFor,
  // param,
  // patch,
  // post,
  // requestBody,
} from '@loopback/rest';
import {
  // Cases,
  // Replies,
} from '../models';
import {CasesRepository} from '../repositories';

export class CasesRepliesController {
  constructor(
    @repository(CasesRepository) protected casesRepository: CasesRepository,
  ) { }

  // @get('/cases/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Cases has many Replies',
  //       content: {
  //         'application/json': {
  //           schema: {type: 'array', items: getModelSchemaRef(Replies)},
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.path.number('id') id: number,
  //   @param.query.object('filter') filter?: Filter<Replies>,
  // ): Promise<Replies[]> {
  //   return this.casesRepository.replies(id).find(filter);
  // }

  // @post('/cases/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Cases model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(Replies)}},
  //     },
  //   },
  // })
  // async create(
  //   @param.path.number('id') id: typeof Cases.prototype.id,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Replies, {
  //           title: 'NewRepliesInCases',
  //           exclude: ['id'],
  //           optional: ['case_id']
  //         }),
  //       },
  //     },
  //   }) replies: Omit<Replies, 'id'>,
  // ): Promise<Replies> {
  //   return this.casesRepository.replies(id).create(replies);
  // }

  // @patch('/cases/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Cases.Replies PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async patch(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Replies, {partial: true}),
  //       },
  //     },
  //   })
  //   replies: Partial<Replies>,
  //   @param.query.object('where', getWhereSchemaFor(Replies)) where?: Where<Replies>,
  // ): Promise<Count> {
  //   return this.casesRepository.replies(id).patch(replies, where);
  // }

  // @del('/cases/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Cases.Replies DELETE success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async delete(
  //   @param.path.number('id') id: number,
  //   @param.query.object('where', getWhereSchemaFor(Replies)) where?: Where<Replies>,
  // ): Promise<Count> {
  //   return this.casesRepository.replies(id).delete(where);
  // }
}
