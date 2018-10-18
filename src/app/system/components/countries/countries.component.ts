import { Component, OnInit } from '@angular/core';
import { CountriesService, Countries } from '../../../shared/countries.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  isAuthorised: boolean;
  CountryList: Countries[];
  isLoaded = false;
  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private authService: AuthService) {

  }
  ngOnInit() {
    this.countriesService.getCountries().subscribe(data =>
      this.CountryList = data);
    this.isAuthorised = this.authService.isAuth();
    this.isLoaded = true;
  }
  onEdit() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/system/login'], { queryParams: { accessDenied: true } });
    }
  }
  onAddCountry() {
    this.router.navigate(['/system/country/create']);
  }
  onEditCountry(country: Countries) {
    this.router.navigate(['/system/country/update', country.id]);
  }
  onDelete(country: Countries) {
    this.router.navigate(['/system/country/delete', country.id]);
  }
  onRead(country: Countries) {
    this.router.navigate(['/system/country/read', country.id]);
  }
}

