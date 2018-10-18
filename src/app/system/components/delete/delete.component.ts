import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService, Countries } from '../../../shared/countries.service';
import { Message } from '../login/login.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  isLoaded = false;
  CountryToDelete: Countries;
  messageText: Message;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.messageText = new Message(null, null)
    const countryId = this.route.snapshot.params['id'];
    this.countriesService.getCountry(countryId).subscribe(data => {
      this.CountryToDelete = data[0];
      this.isLoaded = true;

    });
  }
  onBack() {
    this.router.navigate(['system/countries']);
  }
  onDelete() {
    const countryId = this.route.snapshot.params['id'];
    this.countriesService.deleteCountry(countryId).subscribe(() => {
      this.messageText = new Message('success', `${this.CountryToDelete.name} was successfully deleted`);
      setTimeout(() => {
        this.onBack();

      }, 1300);
    },
      () => {
        this.messageText = new Message('danger', 'server do not response');
      });
  }
}
