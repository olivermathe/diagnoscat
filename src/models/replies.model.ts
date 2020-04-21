import {Entity, model, property} from '@loopback/repository';

@model()
export class Replies extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  question_id: number;

  @property({
    type: 'number',
    required: true,
  })
  case_id: number;


  constructor(data?: Partial<Replies>) {
    super(data);
  }
}

export interface RepliesRelations {
  // describe navigational properties here
}

export type RepliesWithRelations = Replies & RepliesRelations;
