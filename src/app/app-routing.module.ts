import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoformComponent } from './infoform/infoform.component';
import { LameformComponent } from './lameform/lameform.component';


const routes: Routes = [
  {
    path: '',
    component: LameformComponent,
  },
  {
    path: 'infoform',
    component: InfoformComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
