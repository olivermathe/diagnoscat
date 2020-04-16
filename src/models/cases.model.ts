import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'number',
    required: true,
  })
  solution_id: number;


  constructor(data?: Partial<Cases>) {
    super(data);
  }
}

export interface CasesRelations {
  // describe navigational properties here
}

export type CasesWithRelations = Cases & CasesRelations;
