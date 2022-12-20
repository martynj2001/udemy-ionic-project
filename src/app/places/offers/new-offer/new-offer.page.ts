import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  availToDate = new Date().toISOString();
  availFromDate = new Date().toISOString();

  constructor() { }

  ngOnInit() {
  }

  onCreateOfffer(){
    console.log('new Offer Created');
  }

}
