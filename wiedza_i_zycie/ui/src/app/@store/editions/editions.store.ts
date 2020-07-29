import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../app-state';
import { EditionsActions } from './editions.actions';
import { EditionsSelectors } from './editions.selectors';
import { EditionsState } from './editions.state';

@Injectable({
  providedIn: 'root'
})
export class EditionsStore {
  constructor(private store$: Store<AppState>) {}

  state$ = this.store$.pipe(select(EditionsSelectors.getEditions()));

  bulkReadEditions(): void {
    this.store$.dispatch(new EditionsActions.BulkReadEditions());
  }

  filterEditions(query: string): void {
    this.store$.dispatch(new EditionsActions.FilterEditions({ query }));
  }

  subsetEditions(start: number, end: number): void {
    this.store$.dispatch(new EditionsActions.SubsetEditions({ start, end }));
  }

}
