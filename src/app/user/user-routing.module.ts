import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path : '',
    children : [
      { path: 'user/index', component: IndexComponent },
      { path: 'user/create', component: CreateComponent },
      { path: 'user/edit/:idPerson', component: EditComponent },
      { path : '**', redirectTo:'index'}
    ]

  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
