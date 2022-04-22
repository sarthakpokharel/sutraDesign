import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: HeaderComponent,
        children: [
          {
            path: 'form',
            component: FormExampleComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
