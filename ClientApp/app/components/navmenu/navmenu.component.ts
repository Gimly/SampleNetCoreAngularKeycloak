import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {

    constructor(private oauthService: OAuthService) { }

    login(){
        this.oauthService.initImplicitFlow();
    }

    logout(){
        this.oauthService.logOut();
    }

    get givenName() {
        let claims = this.oauthService.getIdentityClaims() as any;
        if(!claims) return null;

        return claims.given_name;
    }
}
