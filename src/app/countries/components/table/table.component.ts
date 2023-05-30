import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './table.component.html',
  styles: [
    `img {
      width: 50px;
    }`
  ]
})
export class TableComponent {

  @Input()
  public errorMessage?: string;

  @Input()
  public countries: Country[] = [];


}
