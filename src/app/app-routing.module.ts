import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';  
import { AddClientComponent } from './add-client/add-client.component';  

const routes: Routes = [  
  { path: '', redirectTo: 'view-client', pathMatch: 'full' },  
  { path: 'view-client', component: ListClientComponent },  
  { path: 'add-client', component: AddClientComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
