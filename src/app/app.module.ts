import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserformComponent } from './userform/userform.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserformComponent,
    DirectivedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
