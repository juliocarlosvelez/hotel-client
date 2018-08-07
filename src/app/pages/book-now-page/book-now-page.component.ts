import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-book-now-page',
  templateUrl: './book-now-page.component.html',
  styleUrls: ['./book-now-page.component.css']
})
export class BookNowPageComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    // this.bookingService.createBooking()
    //   .then((result) => {
    //     this.booking = result;
    //   });
  }

}
