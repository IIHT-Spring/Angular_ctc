import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { UserformComponent } from './userform/userform.component';


const routes: Routes = [
  {path:"form", component:UserformComponent},
  {path:"demo", component:DirectivedemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
// export const routingComponents = [UserformComponent, AboutComponent];
