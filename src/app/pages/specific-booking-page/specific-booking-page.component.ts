import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-specific-booking-page',
  templateUrl: './specific-booking-page.component.html',
  styleUrls: ['./specific-booking-page.component.css']
})
export class SpecificBookingPageComponent implements OnInit {

  booking: any = {};

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.bookingService.getOne(params.id)
          .then(data => this.booking = data);
      });
  }

}
