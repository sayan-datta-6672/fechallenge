import { Component, OnInit } from '@angular/core';
import { first, take, map } from 'rxjs/operators';
import { AccountService } from '@app/services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sort } from '@angular/material/sort';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['./users-style.scss']
})
export class ListComponent implements OnInit {
    users;
    form: FormGroup;
    filterusers;
    sortedData: [];
    loader = true;
    showedit = [];

    constructor(private formBuilder: FormBuilder, private accountService: AccountService) {
        // if (typeof this.users !== 'undefined' && this.users != null)
        this.sortedData = this.users;
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            filterusers: ['', Validators.required]
        });
        
        this.accountService.getAll()
            .pipe(map(function (users: any) {
                return users.data;
            }))
            .subscribe(users => this.users = this.sortedData = users);
        this.loader = false;
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.sortedData = this.users.filter(x => x.id !== id));
    }    

    edit(id: string) {
        this.showedit = [];
        this.showedit[id] = true;
    }

    sortData(sort: Sort) {
        const data = this.users;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'first_name': return compare(a.first_name, b.first_name, isAsc);
                case 'last_name': return compare(a.last_name, b.last_name, isAsc);
                case 'email': return compare(a.email, b.email, isAsc);
                default: return 0;
            }
        });
    }    
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}