import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuiComponent } from './qui/qui.component';

const routes: Routes = [
  { path: 'qui', component: QuiComponent},
  { path: 'quo', loadChildren: () => import('./quo/quo.module').then(m => m.QuoModule)},
  { path: 'qua', loadChildren: () => import('./qua/qua.module').then(m => m.QuaModule)},
  { path: '',   redirectTo: '/qui', pathMatch: 'full' },
  { path: '**', redirectTo: '/qui' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { 
      preloadingStrategy: PreloadAllModules
      //comando per far caricare tutti i moduli in background
      //
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
