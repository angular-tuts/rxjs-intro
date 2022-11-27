import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeExampleComponent } from './async-pipe-example/async-pipe-example.component';

const routes: Routes = [
  { path: '', component: AsyncPipeExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
