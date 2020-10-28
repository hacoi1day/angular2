import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit, OnDestroy {

  public course: Course;
  public subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params.id;
      this.courseService.getCourse(id).subscribe(res => {
        this.course = res;
      });
    });
  }

  onEdit(event): void {
    let button: ElementRef<HTMLButtonElement> = event.target
    console.log(button);
    this.courseService.updateCourse(this.course).subscribe(res => {
      this.router.navigate(['/courses']);
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
