import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country';

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
  public countries: Country[] = [];


}
