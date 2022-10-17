/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    // eslint-disable-next-line max-len
    new Place(
      'p1',
      'Manhattan Mansion',
      'Mansion in Manhatton, New York',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
      199.99),
    // eslint-disable-next-line max-len
    new Place(
      'p2',
      'London Mansion',
      'Very expensive mansion in London, UK',
      'https://media.architecturaldigest.com/photos/58064a7ecdff3c07101deec4/16:9/w_2560%2Cc_limit/Screen%2520Shot%25202016-10-18%2520at%252012.10.43%2520PM.png',
      1000),
    new Place(
      'p3',
      'Country Cottage',
      'Timy littel cottage in the country',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLfPQyowInZ-HPvPdzRDeEQpwN-0ldx2R-RF88eH9&s',
      100)
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }

    getPlace(id: string){
      return {...this._places.find(p => p.id === id)};
    }
}
