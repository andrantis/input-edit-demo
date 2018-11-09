import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'input-edit-demo';
  disabled = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      status: [''],
      profile: this.fb.group({
        phone: [{ value: '', disabled: true }]
      })
    });
  }

  edit() {
    this.disabled = false;
  }

  save() {
    this.disabled = true;
    console.log('saved');
  }

  cancel() {
    this.disabled = true;
    console.log('cancel edit');
  }

  onSubmit() {
    // console.log(this.form.value);
    console.log(this.form.getRawValue());
  }

}
