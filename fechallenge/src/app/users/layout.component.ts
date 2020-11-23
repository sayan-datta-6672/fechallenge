import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/services/account.service';

@Component({ 
    templateUrl: 'layout.component.html',
    styleUrls: ['./users-style.scss'] 
})
export class UserLayoutComponent { 
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/users']);
        } else {
            this.router.navigate(['/account/login']);
        }
    }

    logout() {
        this.accountService.logout();
    }
}