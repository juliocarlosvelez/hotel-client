import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApartmentsPageComponent } from './pages/apartments-page/apartments-page.component';
import { ActivitesPageComponent } from './pages/activites-page/activites-page.component';
import { BookNowPageComponent } from './pages/book-now-page/book-now-page.component';
import { ManageBookingPageComponent } from './pages/manage-booking-page/manage-booking-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaymentSuccessfulPageComponent } from './pages/payment-successful-page/payment-successful-page.component';
import { PaymentFailedPageComponent } from './pages/payment-failed-page/payment-failed-page.component';
import { SpecificBookingPageComponent } from './pages/specific-booking-page/specific-booking-page.component';

import { ApartmentService } from './services/apartment.service';
import { BookingService } from './services/booking.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'apartments', component: ApartmentsPageComponent },
  { path: 'activites', component: ActivitesPageComponent },
  { path: 'book-now', component: BookNowPageComponent },
  { path: 'book-now/payment', component: PaymentPageComponent },
  { path: 'book-now/payment-successful', component: PaymentSuccessfulPageComponent },
  { path: 'book-now/payment-failed', component: PaymentFailedPageComponent },
  { path: 'manage-booking', component: ManageBookingPageComponent },
  { path: 'bookings/:id', component: SpecificBookingPageComponent },
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
    ManageBookingPageComponent,
    PaymentPageComponent,
    PaymentSuccessfulPageComponent,
    PaymentFailedPageComponent,
    SpecificBookingPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApartmentService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

