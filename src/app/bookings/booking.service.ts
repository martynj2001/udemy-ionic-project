import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({providedIn: 'root'})

export class BookingService {

  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeID: 'p1',
      placeTitle: 'Manhatton Mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  get bookings() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._bookings];
  }
}
