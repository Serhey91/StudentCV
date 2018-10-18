import { Component, OnInit } from '@angular/core';
import { CountriesService, Countries } from '../../../shared/countries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-read',
  templateUrl: './country-read.component.html',
  styleUrls: ['./country-read.component.css']
})
export class CountryReadComponent implements OnInit {
  Country: Countries;
  isLoaded = false;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  getYear() {
    const date = new Date().getFullYear();
    return date - 1;
  }
  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.countriesService.getCountry(id).subscribe((data) => {
      this.Country = data[0];
      this.isLoaded = true;
    });
  }
  onBack() {
    this.router.navigate(['system/countries']);
  }
}
