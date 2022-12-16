import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IFood } from '../../../../services/food/food.interface'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    searchTerm = ''
    @Input() foods: IFood[]
    @Output() searchQuery = new EventEmitter<{ searchTerm: string }>()

    setSearch(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.searchQuery.emit({ searchTerm: this.searchTerm })
        }
    }
}
