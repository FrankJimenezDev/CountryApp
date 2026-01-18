import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../services/country';
import { NotFound } from "../../../shared/components/not-found/not-found";

@Component({
  selector: 'app-country-page',
  imports: [NotFound],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(Country)

  countryResource = rxResource({
    params: () => ({
      code: this.countryCode
    }),
    stream: ({ params }) => {
      return this.countryService.searchCountryByAlphaCode(params.code)
    }
  })
}
