import { Component, OnInit } from '@angular/core';
import { VaccineService} from "../../services/vaccine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  private vaccineReg: any;
  private id: number;

  private editMode: boolean = false;

  // form fields
  private name: string ;
  private email: string ;
  private phone: string ;
  private model: string ;
  private serialNumber: string ;
  private purchasePrice: string ;
  private purchaseDate: string ;


  constructor(private vaccineService: VaccineService ,private currentRoute: ActivatedRoute,private route: Router) { }

  ngOnInit() {
    this.id = this.currentRoute.snapshot.params.id;
    this.getVaccineReg(this.id);
  }

  getVaccineReg(id: number) {
    this.vaccineService.getVaccine(id).subscribe(
      data => {
        this.vaccineReg = data;
        this.setFields();
      },
      err => console.error(err),
      () => console.log('vaccines are loaded')
    );
  }

  setFields() {
    this.name = this.vaccineReg.name;
    this.email = this.vaccineReg.email;
    this.phone = this.vaccineReg.phone;
    this.model = this.vaccineReg.model;
    this.serialNumber = this.vaccineReg.serialNumber;
    this.purchasePrice = this.vaccineReg.purchasePrice;
    this.purchaseDate = this.vaccineReg.purchaseDate;
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    this.setFields();
  }



  onDelete(){
    this.vaccineService.deleteVaccine(this.id).subscribe(
      () => this.route.navigate(['/admin'])
    )
  }

  onEdit() {
    this.vaccineService.updateVaccine(this.id, {
      name: this.name,
      email: this.email,
      phone: this.phone,
      model: this.model,
      serialNumber: this.serialNumber,
      purchasePrice: this.purchasePrice,
      purchaseDate: this.purchaseDate,
    }).subscribe(
      () => {
        this.getVaccineReg(this.id);
        this.toggleEdit();
      }
    )
  }

}
