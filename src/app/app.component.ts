import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      personalGroup: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      secret: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
      gender: new FormControl(this.genders[0], Validators.required),
      hobbies: new FormArray([]),
    });
  }

  suggestUserName() {}

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  onSubmit() {
    console.log(this.form);
  }
}
