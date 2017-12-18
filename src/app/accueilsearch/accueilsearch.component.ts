import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import {SearchService} from "../search.service";
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-accueilsearch',
  templateUrl: './accueilsearch.component.html',
  styleUrls: ['./accueilsearch.component.css']
})
export class AccueilsearchComponent implements OnInit {
  categories;
  drop;
  term;
  location;
  coordinates;
  longitude;
  latitude;
  options = [
    'Current Location'
  ];


  constructor(private searchService:SearchService,private router: Router) { }

  ngOnInit() {
    //recup categories from service
    this.searchService.get().subscribe(data => {
      this.categories = data;
    })
  }

  //method button search 
  searchBusinessToolbar(){
    this.searchService.search(this.location,this.drop,this.term,this.longitude,this.latitude).subscribe(data => {
      this.searchService.changeResult(data["businesses"]);

      this.searchService.changeMessage(true);
      this.router.navigate(['/results']);
    })
  }
  
  //get current location
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

}
