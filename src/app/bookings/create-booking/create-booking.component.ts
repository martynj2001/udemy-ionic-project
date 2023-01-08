import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/places.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

  form: FormGroup;


  startDate: string;
  endDate: string;

  today = new Date().toISOString();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

    const availableFrom = new Date(this.selectedPlace.availableFrom);
    const availableTo = new Date(this.selectedPlace.availbaleTo);

    if (this,this.selectedMode === 'random'){
      this.startDate =
      new Date(
          availableFrom.getTime()
          + Math.random()
          * (availableTo.getTime()
          - 7 * 24 * 60 * 60 * 1000
          - availableFrom.getTime())
      ).toISOString();

      // eslint-disable-next-line max-len
      this.endDate = new Date(
        new Date(this.startDate).getTime()
        + Math.random()
        * (new Date(this.startDate).getTime()
        + 6 * 24 * 60 * 60 * 1000
        - new Date(this.startDate).getTime()))
        .toISOString();
    } else {
      this.startDate = availableFrom.toISOString();
      this.endDate = availableTo.toISOString();
    }

    this.form = new FormGroup ({
      firstName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      secondName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      guestNo: new FormControl('2', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      fromDate: new FormControl(this.startDate, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      toDate: new FormControl(this.endDate, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),

    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    if (!this.form.valid || !this.datesVaild()){
      return;
    }
    this.modalCtrl.dismiss({ bookingData: {
      firstName: this.form.value.firstName,
      secondName: this.form.value.secondName,
      guestNo: this.form.value.guestNo,
      dateFrom: this.form.value.fromDate,
      dateTo: this.form.value.toDate
    }}, 'confirm');
  }

  datesVaild(){
    const startDate = new Date(this.form.value.fromDate);
    const endDate = new Date(this.form.value.toDate);
    return endDate > startDate;
  }

}
