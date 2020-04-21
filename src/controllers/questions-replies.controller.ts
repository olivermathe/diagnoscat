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
  // Questions,
  // Replies,
} from '../models';
import {QuestionsRepository} from '../repositories';

export class QuestionsRepliesController {
  constructor(
    @repository(QuestionsRepository) protected questionsRepository: QuestionsRepository,
  ) { }

  // @get('/questions/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Questions has many Replies',
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
  //   return this.questionsRepository.replies(id).find(filter);
  // }

  // @post('/questions/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Questions model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(Replies)}},
  //     },
  //   },
  // })
  // async create(
  //   @param.path.number('id') id: typeof Questions.prototype.id,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Replies, {
  //           title: 'NewRepliesInQuestions',
  //           exclude: ['id'],
  //           optional: ['question_id']
  //         }),
  //       },
  //     },
  //   }) replies: Omit<Replies, 'id'>,
  // ): Promise<Replies> {
  //   return this.questionsRepository.replies(id).create(replies);
  // }

  // @patch('/questions/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Questions.Replies PATCH success count',
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
  //   return this.questionsRepository.replies(id).patch(replies, where);
  // }

  // @del('/questions/{id}/replies', {
  //   responses: {
  //     '200': {
  //       description: 'Questions.Replies DELETE success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async delete(
  //   @param.path.number('id') id: number,
  //   @param.query.object('where', getWhereSchemaFor(Replies)) where?: Where<Replies>,
  // ): Promise<Count> {
  //   return this.questionsRepository.replies(id).delete(where);
  // }
}
