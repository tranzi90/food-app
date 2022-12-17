import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() selectFilter = new EventEmitter<{ type: string }>()

  setFilter(type: string) {
    this.selectFilter.emit({ type })
  }
}
