import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isButtonVisible;
  categories;
  term;
  drop;
  location;
  coordinates;
  longitude;
  latitude;
  options = [
    'Current Location'
  ];
  constructor(private searchService: SearchService) { }

  //method to get current location
  setCoordinates(){
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.coordinates = position['coords'],
            this.latitude=this.coordinates['latitude']
          this.longitude=this.coordinates['longitude']
          console.log(this.coordinates )
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };

  }

  //init with categories ( caching not working) and bool for showing form
  ngOnInit() {
    this.searchService.currentMessage.subscribe( data=> this.isButtonVisible=data);
    this.searchService.get().subscribe(data => {
      this.categories = data;
    })
  }
  //button search toolbar
  searchBusinessToolbar(){

    this.searchService.search(this.location,this.drop,this.term,this.longitude,this.latitude).subscribe(data => {

     this.searchService.datapassing=data["businesses"];
      this.searchService.changeResult(data["businesses"]);
      //console.log(this.searchService.datapassing);

    })
  }

}
