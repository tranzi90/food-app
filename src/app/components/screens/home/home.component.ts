import { Component, OnInit } from '@angular/core'
import { IFood } from '../../../services/food/food.interface'
import { FoodService } from '../../../services/food/food.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    food: IFood[] = []

    constructor(private foodService: FoodService) {}
    ngOnInit(): void {
        this.foodService.getAll().subscribe((data) => (this.food = data))
    }
}
