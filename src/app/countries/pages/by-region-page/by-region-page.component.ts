import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Continent } from '../../interfaces/continent.type';


@Component({
  selector: 'app-country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading:boolean = false;
  public regions: Continent[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Continent;


  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byContinent.countries;
    this.selectedRegion = this.countriesService.cacheStore.byContinent.continent;
  }

  searchByRegion( continent: Continent ) {
    this.selectedRegion = continent;
    this.isLoading = true;
    this.countriesService.searchByRegion( continent )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }


}
