import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';

import { SearchInput } from "../../components/search-input/search-input";
import { TableCountry } from "../../components/table-country/table-country";
import { Country } from '../../services/country';
import { RESTCountry } from '../../interfaces/rest-counties.interface';
import { CountryI } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, TableCountry],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(Country)
  query = signal('')

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!this.query()) return of ([]);
      return this.countryService.searchByCapital(params.query)
    }
  })


  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!this.query()) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     )
  //   }
  // })

  // isLoading = signal(false)
  // isError = signal<string | null>(null)
  // countries = signal<CountryI[]>([])

  // onSearch(query: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true)
  //   this.isError.set(null)

  //   this.countryService.searchByCapital(query)
  //     .subscribe({
  //       next: (countries) => {
  //         this.isLoading.set(false);
  //         this.countries.set(countries)
  //       },
  //       error:(err) => {
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         this.isError.set(err)
  //       },
  //     })

  // }
}
