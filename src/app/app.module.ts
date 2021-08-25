import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BcaComponent } from './Components/courses/bca/bca.component';
import { McaComponent } from './Components/courses/mca/mca.component';
import { BscComponent } from './Components/courses/bsc/bsc.component';
import { CComponent } from './Components/Languages/c/c.component';
import { RubyComponent } from './Components/Languages/ruby/ruby.component';
import { JavaComponent } from './Components/Languages/java/java.component';
import { PythonComponent } from './Components/Languages/python/python.component';
import { HTMLComponent } from './Components/Others/html/html.component';
import { CSSComponent } from './Components/Others/css/css.component';
import { JavaScriptComponent } from './Components/Others/java-script/java-script.component';
import { SQLComponent } from './Components/Others/sql/sql.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    BcaComponent,
    McaComponent,
    BscComponent,
    CComponent,
    RubyComponent,
    JavaComponent,
    PythonComponent,
    HTMLComponent,
    CSSComponent,
    JavaScriptComponent,
    SQLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
