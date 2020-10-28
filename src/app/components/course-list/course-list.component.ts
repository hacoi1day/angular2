import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Subscription} from "rxjs";
import {Course} from "../../models/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public courses: Course[] = [];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.subscription = this.courseService.getAllCourses().subscribe(res => {
      this.courses = res;
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDelete(id: number) {
    this.courseService.deleteCourse(id).subscribe(res => {
      let idx = this.getIndex(id);
      this.courses.splice(idx, 1);
    })
  }

  getIndex(id: number): number {
    let result = 0;
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  }

}
