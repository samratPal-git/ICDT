import { CssSelector } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { BcaComponent } from './Components/courses/bca/bca.component';
import { BscComponent } from './Components/courses/bsc/bsc.component';
import { BtechComponent } from './Components/courses/btech/btech.component';
import { McaComponent } from './Components/courses/mca/mca.component';
import { HomeComponent } from './Components/home/home.component';
import { CComponent } from './Components/Languages/c/c.component';
import { JavaComponent } from './Components/Languages/java/java.component';
import { PythonComponent } from './Components/Languages/python/python.component';
import { RubyComponent } from './Components/Languages/ruby/ruby.component';
import { CSSComponent } from './Components/Others/css/css.component';
import { HTMLComponent } from './Components/Others/html/html.component';
import { JavaScriptComponent } from './Components/Others/java-script/java-script.component';
import { SQLComponent } from './Components/Others/sql/sql.component';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent,canActivate:[AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'btech', component: BtechComponent },
  {path:'bca',component:BcaComponent},
  {path:'bsc',component:BscComponent},
  {path:'mca',component:McaComponent},
  {path:'html',component:HTMLComponent},
  {path:'java-script',component:JavaScriptComponent},
  {path:'sql',component:SQLComponent},
  {path:'css',component:CSSComponent},
  {path:'c',component:CComponent},
  {path:'java',component:JavaComponent},
  {path:'python',component:PythonComponent},
  {path:'ruby',component:RubyComponent},
  { path: '**', component: PageNotFoundComponent }
];
// ** this is called wildCard
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
