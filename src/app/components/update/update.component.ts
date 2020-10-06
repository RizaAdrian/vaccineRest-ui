import { Component, OnInit } from '@angular/core';
import {VaccineService} from "../../services/vaccine.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public vaccine;
  constructor(private vaccineService: VaccineService , private route: ActivatedRoute) { }

  ngOnInit() {
  //  this.updateVaccine();
  }

}
