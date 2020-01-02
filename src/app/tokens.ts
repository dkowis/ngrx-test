import {InjectionToken} from '@angular/core';

export const WINDOW_TOKEN = new InjectionToken<ClWindow>('Token that represents window global variable',
  {
    factory: () => window as ClWindow
  });

export class ClWindow extends Window {
  // @ts-ignore
  CLUI: { autoCompleteInit: any };
}
