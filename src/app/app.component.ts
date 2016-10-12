import {Component, ViewEncapsulation} from "@angular/core";
import {AppState} from "./app.service";
import {AuthService} from "./modules/core/services/auth.service";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private appState: AppState, public authService: AuthService, public router: Router) {}

    ngOnInit() {
        console.info('Current App State => ', this.appState.state);
        this.checkForAuthenticatedUser();
    }


    checkForAuthenticatedUser() {
        const token = localStorage.getItem(environment.JWT_TOKEN);
        // If we have a token, consider the user to be signed in.
        if (token) {
            // we need to update application state
            this.appState.set('authorized', true);
            // this.appState.set('_token', token);
            this.authService.getUser()
                .subscribe(response => {
                    this.appState.set('user', response.user);
                }, error => {
                    // TODO:: notify the user that he been logged out.
                    // Destroy token
                    localStorage.removeItem('token');
                    // set authorized in app state to false
                    this.appState.set('authorized', false);
                    this.appState.set('user', {});
                    this.router.navigate(['auth', 'login']);
                });
        }
    }
}
