import {Entity, model, Model, property, hasMany, belongsTo} from '@loopback/repository';
import {Replies} from '../models/replies.model';
import {Solutions} from '../models/solutions.model';

@model()
export class Result extends Model {
  @property({
    type: 'number',
  })
  id?: number;

  @property({
    type: 'string',
  })
  title: string;

  @property({
    type: 'number',
  })
  likeness: number;

  @property({
    type: Solutions,
  })
  solution: Solutions;

  constructor(data?: Partial<Result>) {
    super(data);
  }
}
