import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './helpers/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { AccountLayoutComponent } from './account/layout.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { UserLayoutComponent } from './users/layout.component';
import { ListComponent } from './users/list.component';
import { AddEditComponent } from './users/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountLayoutComponent,
    LoginComponent,
    RegisterComponent,
    UserLayoutComponent,
    ListComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
