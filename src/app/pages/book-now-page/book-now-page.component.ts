import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-book-now-page',
  templateUrl: './book-now-page.component.html',
  styleUrls: ['./book-now-page.component.css']
})
export class BookNowPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  firstName: String;
  lastName: String;
  email: String;
  apartment: String;
  checkIn: Date;
  checkOut: Date;
  booking: any;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    // this.bookingService.createBooking()
    //   .then((result) => {
    //     this.booking = result;
    //   });
  }

  submitForm(form) {
    console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.bookingService.createBooking(this.firstName, this.lastName, this.email, this.apartment, this.checkIn, this.checkOut)
        .then((result) => {
          // ... handle result, reset form, etc...
          // ... navigate with this.router.navigate(['...'])
          // ... maybe turn this to false if your're staying on the page - this.processing = false;
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
