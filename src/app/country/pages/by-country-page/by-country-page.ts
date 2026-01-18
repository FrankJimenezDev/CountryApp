import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { TableCountry } from "../../components/table-country/table-country";
import { firstValueFrom, of, take } from 'rxjs';
import { Country } from '../../services/country';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, TableCountry],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryService = inject(Country)
  query = signal('')

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!this.query()) return of ([]);
      return this.countryService.searchByCountry(params.query)
    }
  })
 }
