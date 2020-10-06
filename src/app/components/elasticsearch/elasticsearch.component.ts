import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-elasticsearch',
  templateUrl: './elasticsearch.component.html',
  styleUrls: ['./elasticsearch.component.css'],
})
export class ElasticsearchComponent implements OnInit {
  @Input() search: (value: string) => void;

  private searchValue: string = '';

  constructor() {}

  ngOnInit() {
  }

  onSearch = () => {
    this.search(this.searchValue);
  }
}
