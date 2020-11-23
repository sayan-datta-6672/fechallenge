import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/services/account.service';
import { AlertService } from '@app/services/alert.service';

@Component({
    selector: 'app-edit',
    templateUrl: 'add-edit.component.html'
})
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    @Input() user: any;
    @Input() showedit;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        if (typeof this.user != 'undefined') {
            console.log(this.user);
            this.id = this.user.id;
        }
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', this.isAddMode ? Validators.required : ''],
            password: ['', passwordValidators]
        });

        if (!this.isAddMode) {
            this.form.value.firstName = this.user.first_name;
            this.form.value.lastName = this.user.last_name;
            this.form.patchValue({ firstName: this.user.first_name, lastName: this.user.last_name });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createUser();
        } else {
            this.updateUser();
        }
    }

    editCancel() {
        this.showedit[this.id] = false;
    }

    private createUser() {
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('User added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private updateUser() {
        this.accountService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.user.first_name = this.form.value.firstName;
                    this.user.last_name = this.form.value.lastName;
                    this.showedit[this.id] = false;
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}