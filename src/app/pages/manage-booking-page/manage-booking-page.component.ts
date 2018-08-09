import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-booking-page',
  templateUrl: './manage-booking-page.component.html',
  styleUrls: ['./manage-booking-page.component.css']
})
export class ManageBookingPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  booking: any = {};

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.bookingService.findBooking(this.booking)
        .then((result) => {
          this.router.navigate(['bookings/', result._id]);
        })
        .catch((err) => {
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
