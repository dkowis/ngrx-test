import { Action, ActionReducerMap, createAction, createReducer, MetaReducer, on, props } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';
import { InjectionToken } from '@angular/core';

export interface OtherStuff {
  name: string | null;
  time: number | null;
}

export interface InfoForm {
  firstName: string | null;
  lastName: string | null;
  age: number | null;
}

export interface AppState {
  infoForm: FormGroupState<InfoForm>;
  thing: OtherStuff;
  moreThings: OtherStuff;
}

const FORM_ID = 'NAMEFORM';
const initialFormState = createFormGroupState<InfoForm>(FORM_ID, {
  firstName: null,
  lastName: null,
  age: null
});

const initialState: AppState = {
  infoForm: initialFormState,
  thing: {
    name: null,
    time: null,
  },
  moreThings: {
    name: null,
    time: null,
  }
};


export const someAction = createAction('[Some Lame Action] name', props<{ name: string }>());

export const timedAction = createAction('[Some Lame Action] timer', props<{ time: number }>());

export const someReducer = createReducer<OtherStuff>(
  {
    name: null,
    time: null,
  },
  on(someAction, (state, {name}) => ({
      ...state,
      name,
      time: 99,
    })
  ),
  on(timedAction, (state, {time}) => ({
    ...state,
    time
  }))
);

export const formReducer = createReducer<FormGroupState<InfoForm>>(
  initialFormState,
  onNgrxForms()
);

// How does this get plugged in??
// From : https://ngrx-forms.readthedocs.io/en/master/user-guide/
export const appReducer = createReducer(
  initialState,
  onNgrxForms(),
);

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<AppState, Action>>(
  'Root reducers token', {
    factory: () => ({
      thing: someReducer,
      infoForm: formReducer,
      moreThings: someReducer,
    }),
  });


// export const reducers: ActionReducerMap<AppState> = {
//   thing: someReducer,
//   infoForm: formReducer,
//   moreThings: someReducer
// };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
