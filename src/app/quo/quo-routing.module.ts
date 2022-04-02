import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoComponent } from './quo.component';

const routes: Routes = [{ path: '', component: QuoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //le root sono caricate con il forChild anzichè con il forRoot dell'app-routing-Module
  exports: [RouterModule]
})
export class QuoRoutingModule { }
