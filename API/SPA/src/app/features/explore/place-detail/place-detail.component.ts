import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place: any;
  placeId: any;
  isIframe: boolean = false;
  safeUrl: SafeResourceUrl;

  constructor(
    private _placeService : PlacesService,
    private sanitizer: DomSanitizer,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.placeId = this._activatedRoute.snapshot.paramMap.get('id') ?? "";
    this.getPlace();
  }

  getPlace(){
    this._placeService.getPlaceById(this.placeId)
      .then(response => {
        this.place = response;
        this.sanitizeURl(this.place?.locationAddress)
      })
  }

  sanitizeURl(url){
    this.isIframe = true;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
