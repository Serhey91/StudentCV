import { Component, OnInit } from '@angular/core';
import { CountriesService, Countries } from '../../../shared/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { Message } from '../login/login.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  Country: Countries;
  FormGroup: FormGroup;
  FormMessage: Message;
  isLoaded = false;
  constructor(
    private countryService: CountriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.getCountryFormRoute();

  }
  createForm() {
    this.FormMessage = new Message(null, null);
    this.FormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      population: new FormControl(null, [Validators.required, Validators.min(4000)]),
      capital: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      currency: new FormControl(null, [Validators.required, Validators.maxLength(4), Validators.minLength(2)])
    });
  }
  getCountryFormRoute() {
    const id = this.route.snapshot.params['id'];
    if (id === undefined) {
      this.Country = new Countries(null, null, null, null, 'Engilsh', 'usd');
      this.FormGroup.patchValue(this.Country);
      this.isLoaded = true;
      // console.log(this.FormGroup);
    } else {
      this.countryService.getCountry(id).subscribe(data => {
        this.Country = data[0];
        this.FormGroup.patchValue(this.Country);
        // console.log(this.FormGroup);
        this.isLoaded = true;

      }, (err) => {
        this.FormMessage = new Message('danger', err);
      });
    }
  }
  onBack() {
    this.router.navigate(['system/countries']);

  }
  onSubmit(form: FormGroup) {
    if (!this.route.snapshot.params['id']) {
      this.countryService.addCountry(form.value).subscribe(
        () => {
          this.FormMessage = new Message('success', 'New country was added');
          setTimeout(() => {
            this.onBack();

          }, 1000);

        },
        (err) => { this.FormMessage = new Message('danger', err); }
      );
    } else {
      this.Country.name = form.value.name;
      this.Country.population = form.value.population;
      this.Country.language = form.value.language;
      this.Country.currency = form.value.currency;
      this.Country.capital = form.value.capital;
      this.countryService.editCountry(this.Country).subscribe(
        () => {
          this.FormMessage = new Message('success', `${this.Country.name} was edit`);
          setTimeout(() => {
            this.onBack();

          }, 1000);

        },
        (err) => { this.FormMessage = new Message('danger', err); }
      );
    }
    // console.log(form.value);
  }
}
