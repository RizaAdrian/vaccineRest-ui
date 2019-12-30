import { Component, OnInit } from '@angular/core';
import { VaccineService} from "../../services/vaccine.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public vaccineReg;

  constructor(private vaccineService: VaccineService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVaccineReg(this.route.snapshot.params.id);
  }

  getVaccineReg(id: number) {
    this.vaccineService.getVaccine(id).subscribe(
      data => {
        this.vaccineReg = data;
      },
      err => console.error(err),
      () => console.log('vaccines are loaded')
    );
  }
}
