import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { WINDOW_TOKEN } from '../tokens';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, InfoForm, someAction } from '../reducers';
import { FormGroupState } from 'ngrx-forms';

@Component({
  selector: 'app-infoform',
  templateUrl: './infoform.component.html',
  styleUrls: ['./infoform.component.scss']
})
export class InfoformComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  formState$: Observable<FormGroupState<InfoForm>>;
  private firstNameValue$: Observable<string>;
  private lastNameValue$: Observable<string>;
  private ageValue$: Observable<number>;

  constructor(private readonly activatedRoute: ActivatedRoute,
              @Inject(WINDOW_TOKEN) private window: Window,
              private store: Store<AppState>) {

    this.formState$ = store.select(s => s.infoForm);
    this.firstNameValue$ = store.select(s => s.infoForm.value.firstName);
    this.lastNameValue$ = store.select(s => s.infoForm.value.lastName);
    this.ageValue$ = store.select(s => s.infoForm.value.age);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.activatedRoute.paramMap
      .pipe(map(() => this.window.history.state))
      .subscribe((state: any) => {
        if (state.name) {
          console.log('LOL NAME: ', state.name);
          this.store.dispatch(someAction({name: state.name}));
        } else {
          console.log(' no name :( ');
          this.store.dispatch(someAction({name: 'I\'ve been through the desert'}));
        }
      }));
  }

}
