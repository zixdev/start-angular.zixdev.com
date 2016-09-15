import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {HeaderComponent, FooterComponent} from "./components";
import {RouterModule} from "@angular/router";
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

const APP_ROUTES = [
    {path: '', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        HomeBannerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(APP_ROUTES, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
