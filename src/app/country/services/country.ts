import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-counties.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { CountryI } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class Country {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<CountryI[]> {

    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountyList(restCountries)),
        catchError(error => {
          console.log(error);
          return throwError(() => new Error(`No se pudieron obtener paises con ese query: ${query}`))
        })
      )

  }

  searchByCountry(query: string): Observable<CountryI[]> {

    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountyList(restCountries)),
        delay(2000),
        catchError(error => {
          console.log(error);
          return throwError(() => new Error(`No se pudieron obtener paises con ese query: ${query}`))
        })
      )
  }

  searchCountryByAlphaCode(code: string): Observable<CountryI | undefined> {

    code = code.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountyList(restCountries)),
        map(countries => countries.at(0)),
        catchError(error => {
          console.log(error);
          return throwError(() => new Error(`No se pudieron obtener paises con ese codigo: ${code}`))
        })
      )

  }
}
