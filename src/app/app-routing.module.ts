import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';   //shouldn't concernt the compiler as already set-up
import { HomeComponent } from './home/home.component';                  //shouldn't concernt the compiler as already set-up

const routes: Routes = [
  {path: 'directory', component: DirectoryComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
