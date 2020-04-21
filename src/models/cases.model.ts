import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Replies} from './replies.model';
import {Solutions} from './solutions.model';

@model()
export class Cases extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;
  @hasMany(() => Replies, {keyTo: 'case_id'})
  replies: Replies[];

  @belongsTo(() => Solutions, {name: 'solutionId'})
  solution_id: number;

  constructor(data?: Partial<Cases>) {
    super(data);
  }
}

export interface CasesRelations {
  // describe navigational properties here
}

export type CasesWithRelations = Cases & CasesRelations;
