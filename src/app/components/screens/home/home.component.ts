import { Component, OnInit } from '@angular/core'
import { IFood } from '../../../services/food/food.interface'
import { FoodService } from '../../../services/food/food.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    food: IFood[] = []
    filteredFood: IFood[] = []

    constructor(private foodService: FoodService) {}
    ngOnInit() {
        this.foodService.getAll().subscribe((data) => {
            this.food = data
            this.filteredFood = data
        })
    }

    onSearch(eventData: { searchTerm: string }) {
        this.filteredFood = this.food.filter((food) =>
            food.title
                .toLowerCase()
                .includes(eventData.searchTerm.toLowerCase())
        )
    }

  onFilter(eventData: { type: string }) {
    this.filteredFood = this.food.filter((food) =>
      food.type === eventData.type
    )
  }
}
