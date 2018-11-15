import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes} from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '/', component : HomeComponent },
  {path: 'movies', component : MoviesComponent},
  {path: '**', component : ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent, 
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
