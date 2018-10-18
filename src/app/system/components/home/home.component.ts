import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  technologies = [
    {name: 'HTML5', description: 'Hypertext markup language'},
    {name: 'CSS3', description: 'Cascading Style Sheets'},
    {name: 'JS', description: 'JavaScript'},
    {name: 'TS', description: 'TypeScript'},
    {name: 'AJAX', description: 'Asynchronous JavaScript And XML'},
    {name: 'GIT', description: 'Version-control system'},
    {name: 'TB4', description: 'Twitter bootstrap'},
    {name: 'LESS', description: 'CSS Preprocessor'},
    {name: 'SASS', description: 'CSS Preprocessor'},
    {name: 'JQuery', description: 'JavaScript library'},
    {name: 'Angular JS', description: 'JavaScript framework'},
    {name: 'Angular', description: 'TypeScript framework'},
    {name: 'Vue.JS', description: 'JavaScript framework'},
    {name: 'GULP', description: 'Javascript task runner'},
    {name: 'Node.js', description: 'JavaScript platform'},
    {name: 'Karma', description: 'JavaScript test runner'},
    {name: 'Jasmine', description: 'Testing framework for JavaScript'},
    {name: 'CORS', description: 'Cross-Origin Resource Sharing'},
    {name: 'JSON', description: 'JavaScript Object Notation'},
    {name: 'Webpack', description: 'Module builder'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
