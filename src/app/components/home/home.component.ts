import { Component, OnInit } from '@angular/core';
import { VaccineService} from "../../services/vaccine.service";
import {FormGroup , FormControl , Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
moldels: string[] = [
  'Anti-Tetanus',
  'Anti-Rubeolic',
  'Anti-Hepatic'
];
vaccineForm: FormGroup;
validMessage: string = "";

  constructor(private vaccineService: VaccineService,private route: Router) {

  }

  ngOnInit() {
    this.vaccineForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.vaccineForm.valid) {
      this.validMessage = 'Your vaccine registration has been submitted. Thank you!';
      this.vaccineService.createVaccineRegistration(this.vaccineForm.value).subscribe(
        data => {
          // this.bikeform.reset();
          this.route.navigate(['/admin'])
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
