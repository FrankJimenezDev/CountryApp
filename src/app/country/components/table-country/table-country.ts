import { DecimalPipe } from '@angular/common';
import { CountryI } from '../../interfaces/country.interface';
import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-table-country',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './table-country.html',
})
export class TableCountry {

  countries = input.required<CountryI[]>()

  errorMessage = input<string | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

 }
