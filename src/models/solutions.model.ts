import {Entity, model, property} from '@loopback/repository';

@model()
export class Solutions extends Entity {
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
  description: string;


  constructor(data?: Partial<Solutions>) {
    super(data);
  }
}

export interface SolutionsRelations {
  // describe navigational properties here
}

export type SolutionsWithRelations = Solutions & SolutionsRelations;
