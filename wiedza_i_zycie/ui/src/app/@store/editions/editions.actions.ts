
import { Action } from '@ngrx/store';
import { Edition } from './editions.model';

export namespace EditionsActions {
  export enum Type {
    BULK_READ_EDITIONS = '[EDITIONS] Bulk Read Editions',
    BULK_READ_EDITIONS_SUCCESS = '[EDITIONS] Bulk Read Editions Success',
    BULK_READ_EDITIONS_ERROR = '[EDITIONS] Bulk Read Editions Error',
    FILTER_EDITIONS = '[EDITIONS] Filter Editions',
    SUBSET_EDITIONS = '[EDITIONS] Chose Editions Based On Borders'
  }

  export class BulkReadEditions implements Action {
    readonly type = Type.BULK_READ_EDITIONS;

    constructor() {}
  }

  export class BulkReadEditionsSuccess implements Action {
    readonly type = Type.BULK_READ_EDITIONS_SUCCESS;

    constructor(public payload: { editions: Edition[], query?: string }) {}
  }

  export class BulkReadEditionsError implements Action {
    readonly type = Type.BULK_READ_EDITIONS_ERROR;

    constructor() {}
  }

  export class FilterEditions implements Action {
    readonly type = Type.FILTER_EDITIONS;

    constructor(public payload: { query: string }) {}
  }

  export class SubsetEditions implements Action {
    readonly type = Type.SUBSET_EDITIONS;

    constructor(public payload: {start: number, end: number}) {}
  }

  export type Actions =
    | BulkReadEditions
    | BulkReadEditionsSuccess
    | BulkReadEditionsError
    | FilterEditions
    | SubsetEditions
}
