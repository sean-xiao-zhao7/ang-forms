import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  secretQuestionValue: string = 'pet';
  genders: string[] = ['Male', 'Female'];

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      secret: new FormControl(null),
      answer: new FormControl(null),
      gender: new FormControl(this.genders[0]),
    });
  }

  suggestUserName() {}

  onSubmit() {}
}
