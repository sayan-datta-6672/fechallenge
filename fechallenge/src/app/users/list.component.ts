import { Component, OnInit } from '@angular/core';
import { first, take, map } from 'rxjs/operators';
import { AccountService } from '@app/services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterPipe } from '@app/pipes/filter.pipe';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private accountService: AccountService) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            filterusers: ['', Validators.required]
        });

        this.accountService.getAll()
            .pipe(take(1))
            .subscribe(users => this.users = (users.hasOwnProperty('data') ? users.data : users));
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}