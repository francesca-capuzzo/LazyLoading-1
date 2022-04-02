import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteDataService, RouteData } from '../route-data.service';
import { QuaComponent } from './qua.component';

const routes: Routes = [{ 
  path: '',
  component: QuaComponent, 
  resolve: {
    RouteData: RouteDataService
    //service speciale chiamato RESOLVE che implementa il service ROUTE-DATA che evita di rallentare il sito caricando solo le impostazioni necessarie alla pagina
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuaRoutingModule { }
