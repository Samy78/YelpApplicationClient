import { Component, OnInit,Input } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //data-binding
  @Input() dataresults;
  constructor(private searchService:SearchService) { }

  //get data from service
  ngOnInit() {
  }

  //convert lat and lng to number
  ConvertString(value: string): number{
    //console.log(value);
    return +value
  }
}
