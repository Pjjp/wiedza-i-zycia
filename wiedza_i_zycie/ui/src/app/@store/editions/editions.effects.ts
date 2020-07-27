import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, filter, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../app-state';
import { EditionsActions } from './editions.actions';
import { Edition } from './editions.model';

import { EditionsStore } from './editions.store';

@Injectable()
export class EditionsEffects {
  @Effect()
  onBulkReadEditions$: Observable<Action> = this.actions$.pipe(
    ofType<EditionsActions.BulkReadEditions>(EditionsActions.Type.BULK_READ_EDITIONS),
    switchMap(action => {
      return this.http.get('/assets/editions.json').pipe(
        tap(editions => {
          this.editionsStore.runProgressBar();
          console.log('pokaż progress bar');
        }),
        map((editions: Edition[]) => new EditionsActions.BulkReadEditionsSuccess({ editions })),
        catchError(err => {
          return of(new EditionsActions.BulkReadEditionsError());
        })
      );
    })
  );

  // @Effect()
  // onBulkReadEditionsSuccess$: Observable<Action> = this.actions$.pipe(
  //   ofType<EditionsActions.BulkReadEditions>(EditionsActions.Type.BULK_READ_EDITIONS_SUCCESS),
  //       tap(editions => {
  //         this.editionsStore.stopProgressBar();
  //       }),
  // );

  // taki sam problem jak przy poprzednim commicie
  onBulkReadEditionsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType<EditionsActions.BulkReadEditionsSuccess>(EditionsActions.Type.BULK_READ_EDITIONS_SUCCESS),
      tap(action => {
        this.editionsStore.stopProgressBar();
      })
    ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private http: HttpClient,
    private editionsStore: EditionsStore,
  ) {}
}
