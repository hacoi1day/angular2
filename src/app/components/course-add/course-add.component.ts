import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {

  @ViewChild('buttonSubmit', {static: true}) button: ElementRef<HTMLButtonElement>;

  public name: string;
  public description: string;
  public fee: number;
  public subscription: Subscription;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.button);

  }

  onAdd(): void {
    this.disableButtonSubmit();
    let course = new Course(this.name, this.description, this.fee);
    this.subscription = this.courseService.addCourse(course).subscribe(res => {
      if (res) {
        this.router.navigate(['/courses']);
      }
    })
  }

  disableButtonSubmit(): void {
    this.button.nativeElement.disabled = true;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
