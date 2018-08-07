import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../../services/apartment.service';

@Component({
  selector: 'app-apartments-page',
  templateUrl: './apartments-page.component.html',
  styleUrls: ['./apartments-page.component.css']
})
export class ApartmentsPageComponent implements OnInit {
  apartments: any;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentService.getAll()
    .then((result) => {
      this.apartments = result;
    });
  }

}
