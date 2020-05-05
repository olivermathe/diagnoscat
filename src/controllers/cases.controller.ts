import {
  // Count,
  // CountSchema,
  Filter,
  // FilterExcludingWhere,
  repository,
  // Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  // patch,
  // put,
  // del,
  requestBody,
} from '@loopback/rest';
import {Cases, Replies} from '../models';
import {CasesRepository, QuestionsRepository, SolutionsRepository} from '../repositories';
import {Result} from './'
export class CasesController {
  constructor(
    @repository(CasesRepository)
    public casesRepository : CasesRepository,
    @repository(QuestionsRepository)
    public questionsRepository : QuestionsRepository,
    @repository(SolutionsRepository)
    public solutionsRepository : SolutionsRepository,
  ) {}

  @post('/cases', {
    responses: {
      '200': {
        description: 'Cases model instance',
        content: {'application/json': {schema: getModelSchemaRef(Result)}},
      },
    },
  })
  async create(
    @requestBody()
    newCase: any,
  ): Promise<any> {

    const cases = await this.getCases()

    let bestValue = Number.MAX_SAFE_INTEGER;
    let bestCase = null;

    console.log(1, bestValue)

    for (const c of cases) {

      const value = this.compare(newCase, c)

      if (value <= bestValue) {
        bestValue = value;
        bestCase = c;
      }

      console.log(2, bestValue)

    }

    const solution = await this.solutionsRepository.findOne({
      where: { id: bestCase.solution_id }
    })

    return {
      solution: solution?.description,
      distance: bestValue
    }

  }

  compare(newCase: any, c: any): number {

    const results = []

    for (const answer1 of newCase.answers) {

      const answer2 = c.replies.find((r: any) => r.question_id === answer1.question_id)
      const weight = answer2.question.weight
      const value1 = parseInt(answer1.value)
      const value2 = parseInt(answer2.value)

      results.push((weight * (value1 - value2)))

    }

    const dist = this.sumArrayValues(results)

    if (dist < 0) {
      return dist * -1
    } else {
      return dist
    }

  }

  sumArrayValues(array: any) {
    console.log(3, array)
    return array.reduce((a: any, b: any) => a + b, 0)
  }

  async getCases(): Promise<any> {
    const casesFound = await this.casesRepository.find({
      include: [
        { relation: 'replies' },
      ]
    });
    for (const caseFound of casesFound) {
      for (const replie of caseFound.replies) {
        replie.question = await this.questionsRepository.findOne({
          where: {
            id: replie.question_id
          }
        })
      }
    }
    return casesFound;
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

  @get('/cases', {
    responses: {
      '200': {
        description: 'Array of Cases model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Cases, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Cases) filter?: Filter<Cases>,
  ): Promise<Cases[]> {
    return this.casesRepository.find(filter);
  }

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
