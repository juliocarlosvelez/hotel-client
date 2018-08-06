import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApartmentsPageComponent } from './pages/apartments-page/apartments-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'apartments', component: ApartmentsPageComponent },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HomePageComponent,
    ApartmentsPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

