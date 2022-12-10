import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router'

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, MatIconModule, RouterLink],
    exports: [HeaderComponent],
})
export class HeaderModule {}
