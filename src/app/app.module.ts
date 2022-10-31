import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component.spec';
import { JokeComponent } from './component_vol_2/joke/joke.component';
import { JokeListComponent } from './component_vol_2/joke-list/joke-list.component';
import { NavComponent } from './component_vol_2/nav/nav.component';
import { LoginComponent } from './component_vol_2/login/login.component';
import { RegisterComponent } from './component_vol_2/register/register.component';
import { ProfileComponent } from './component_vol_2/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
