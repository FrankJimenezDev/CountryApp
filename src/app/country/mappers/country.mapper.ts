import { CountryI } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-counties.interface';

export class CountryMapper {

  static mapRestCounty(country: RESTCountry): CountryI {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      capital: country.capital.join(","),
      population: country.population,
      nombre: country.translations['spa'].common ?? 'No spanish name'
    }
  }

  static mapRestCountyList(countries: RESTCountry[]): CountryI[] {
    return countries.map((country) => (this.mapRestCounty(country)))
  }

}

