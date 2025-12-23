import { Component } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { TableCountry } from "../../components/table-country/table-country";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, TableCountry],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  onSearch(value: string) {
    console.log({ value });
  }
 }
