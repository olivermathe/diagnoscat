import {Entity, model, property, hasMany} from '@loopback/repository';
import {Replies} from './replies.model';

@model()
export class Questions extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  question: string;

  @property({
    type: 'number',
    required: true,
  })
  weight: number;

  @property({
    type: 'number',
    required: true,
  })
  order: number;

  @hasMany(() => Replies, {keyTo: 'question_id'})
  replies: Replies[];

  constructor(data?: Partial<Questions>) {
    super(data);
  }
}

export interface QuestionsRelations {
  // describe navigational properties here
}

export type QuestionsWithRelations = Questions & QuestionsRelations;
