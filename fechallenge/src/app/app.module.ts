import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FilterPipe } from './pipes/filter.pipe';
import { AlertComponent } from './components/alert.component';
import { MatSortModule } from '@angular/material/sort';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountLayoutComponent,
    LoginComponent,
    RegisterComponent,
    UserLayoutComponent,
    ListComponent,
    AddEditComponent,
    FilterPipe,
    AlertComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSortModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
