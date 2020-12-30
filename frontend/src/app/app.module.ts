import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoadingComponent } from './core/components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { metaReducers, ROOT_REDUCERS } from './store';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		LoadingComponent,
		ToolbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatProgressSpinnerModule,
		RouterModule,
		StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument(),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
