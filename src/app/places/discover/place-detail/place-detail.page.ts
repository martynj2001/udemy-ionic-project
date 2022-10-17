import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeID')){
        this.navCtrl.navigateBack(['/', 'places', 'tabs', 'discover']);
      }
      this.place = this.placesService.getPlace(paramMap.get('placeID'));
    });
  }

  onBookPlace(){
    //this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
