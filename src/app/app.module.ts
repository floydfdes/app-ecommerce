import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { AboutComponent } from './core/components/about/about.component';
import { BlogComponent } from './core/components/blog/blog.component';
import { HomeModule } from './core/modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutComponent,
    BlogComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
