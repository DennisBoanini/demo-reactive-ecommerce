import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
	{path: '', redirectTo: 'product-list', pathMatch: 'full'},
	{path: 'product-list', loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModule)},
	{path: '404', component: PageNotFoundComponent},
	{path: '**', redirectTo: '/404'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
