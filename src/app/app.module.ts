import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { LayoutModule } from './components/ui/layout/layout.module'
import { HeaderModule } from './components/ui/layout/header/header.module'
import { AppRoutingModule } from './app-routing.module'
import { RouterOutlet } from '@angular/router'
import { HomeModule } from './components/screens/home/home.module'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LayoutModule,
        HeaderModule,
        AppRoutingModule,
        RouterOutlet,
        HomeModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
