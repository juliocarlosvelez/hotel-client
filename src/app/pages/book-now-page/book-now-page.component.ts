import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { ApartmentService } from '../../services/apartment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now-page',
  templateUrl: './book-now-page.component.html',
  styleUrls: ['./book-now-page.component.css']
})
export class BookNowPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  booking: Object = {};
  apartments: any;

  constructor(private bookingService: BookingService, private router: Router, private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentService.getAll()
    .then((result) => {
      this.apartments = result;
    });
  }

  submitForm(form) {
    console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.bookingService.createBooking(this.booking)
        .then((result) => {
          this.router.navigate(['/booking', result._id]);
        })
        .catch((err) => {
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
