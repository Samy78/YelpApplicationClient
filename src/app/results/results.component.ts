import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  dataresults;
  constructor(private searchService:SearchService) { }

  ngOnInit() {
    //recup data from service
    this.searchService.datapassing.subscribe( data=> this.dataresults=data);
    //console.log(this.dataresults);
  }
  ConvertString(value: string): number{
    //console.log(value);
    return +value
  }


}
