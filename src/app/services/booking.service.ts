import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = environment.apiUrl + '/bookings';

  constructor(private httpClient: HttpClient) { }

  createBooking(firstName: String, lastName: String, email: String, apartment: String, checkIn: Date, checkOut: Date): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = {
      firstName,
      lastName,
      email,
      apartment,
      checkIn,
      checkOut
    };
    return this.httpClient.post(`${this.baseUrl}`, data , options)
      .toPromise();
  }

}
