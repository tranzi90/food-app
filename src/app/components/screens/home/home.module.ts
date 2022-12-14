import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { FoodItemComponent } from './food-item/food-item.component'
import { RouterLink } from '@angular/router'
import { SearchComponent } from './search/search.component'
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component'

@NgModule({
    declarations: [HomeComponent, FoodItemComponent, SearchComponent, FiltersComponent],
    imports: [CommonModule, RouterLink, FormsModule],
})
export class HomeModule {}
