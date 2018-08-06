import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApartmentsPageComponent } from './pages/apartments-page/apartments-page.component';
import { ActivitesPageComponent } from './pages/activites-page/activites-page.component';
import { BookNowPageComponent } from './pages/book-now-page/book-now-page.component';
import { ManageReservationPageComponent } from './pages/manage-reservation-page/manage-reservation-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'apartments', component: ApartmentsPageComponent },
  { path: 'activites', component: ActivitesPageComponent },
  { path: 'book-now', component: BookNowPageComponent },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HomePageComponent,
    ApartmentsPageComponent,
    ActivitesPageComponent,
    BookNowPageComponent,
    ManageReservationPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

