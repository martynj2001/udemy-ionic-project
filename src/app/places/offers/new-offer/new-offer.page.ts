import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  today = new Date().toISOString();

  form: FormGroup;

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(this.today, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(this.today, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCreateOfffer(){
    console.log(this.form);
  }

}
