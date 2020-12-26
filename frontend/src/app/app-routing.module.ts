import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				redirectTo: 'product-list',
				pathMatch: 'full'
			},
			{
				path: 'product-list', loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
