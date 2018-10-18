import { Component, OnInit } from '@angular/core';
import { CoursesService, Courses } from '../../../shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesList: Courses[];
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesList = this.coursesService.getAll();
   
  }
}
