import { Component, OnInit } from '@angular/core';
import { VaccineService} from "../../services/vaccine.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public vaccines;

  constructor(private vaccineService: VaccineService) {
    this.onSearch = this.onSearch.bind(this)
  }

  ngOnInit() {
    this.getVaccines();
  }

  getVaccines(){
    this.vaccineService.getVaccines().subscribe(
      data=>{this.vaccines = data},
      err=>console.error(err),
      ()=>console.log('vaccines are loaded')
    );
  }

  onSearch = (searchValue: string) => {
    this.vaccineService.searchVaccine(searchValue).subscribe(
      data =>this.vaccines = data
    )
  }

}
