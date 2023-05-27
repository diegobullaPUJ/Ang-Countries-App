import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor (private countriesServices: CountriesService) {}

  searchByCapital( term :string ) {
    this.countriesServices.searchByCapital( term )
    .subscribe( countries =>  {
      this.countries = countries;
    });
  }


}
