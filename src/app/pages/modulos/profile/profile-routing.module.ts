import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routesDash : Routes = [
  {
    path: 'profile', component: ProfileComponent,   
  
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesDash)
  ],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }