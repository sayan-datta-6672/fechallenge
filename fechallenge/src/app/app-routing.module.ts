import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { AccountLayoutComponent } from './account/layout.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { UserLayoutComponent } from './users/layout.component';
import { ListComponent } from './users/list.component';
import { AddEditComponent } from './users/add-edit.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        component: AccountLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'users',
        component: UserLayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'add',
                component: AddEditComponent
            },
            {
                path: 'edit/:id',
                component: AddEditComponent
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        component: NotfoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
