import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './NewAccount/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewMemberComponent } from './NewAccount/new-member/new-member.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { DrawShapesComponent } from './draw-shapes/draw-shapes.component';

const appRoutes: Routes = [
  {path: 'main-page', component:  MainPageComponent},
  {path: 'first-page', component:  FirstPageComponent},
  {path: 'new-member', component:  NewMemberComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'welcome-page', component: WelcomePageComponent },
  //{path: '', redirectTo: 'welcome-page', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatSidenavModule,
    HttpClientModule  ,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
   
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    WelcomePageComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NewMemberComponent,
    FirstPageComponent,
    MainPageComponent,
    DisplayResultComponent,
    DrawShapesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
