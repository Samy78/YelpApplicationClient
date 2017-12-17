import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilsearchComponent } from './accueilsearch/accueilsearch.component';
import { ResultsComponent } from './results/results.component';
import {SearchService} from "./search.service";
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MatMenuModule,MatExpansionModule,MatButtonModule,MatTableModule, MatIconModule, MatCardModule, MatSidenavModule,MatToolbarModule,MatGridListModule,MatSelectModule,MatAutocompleteModule  } from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';
import { MapComponent } from './results/map.component';
import { TableComponent } from './results/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilsearchComponent,
    ResultsComponent,
    MapComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,MatSelectModule,MatCardModule,MatAutocompleteModule,MatGridListModule,MatExpansionModule,MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEyg8pvNekwqHeSBevD_kuQFz6EIRrzok'
    }),
    AgmSnazzyInfoWindowModule,
    StarRatingModule.forRoot()

  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
