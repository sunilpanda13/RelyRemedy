import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HolderLoginComponent } from './holder/holder-login/holder-login.component';
import { HoldersignupComponent } from './holder/holdersignup/holdersignup.component';
import { HolderTablePageComponent } from './holder/holder-table-page/holder-table-page.component';
import { VerifierloginComponent } from './verifier/verifierlogin/verifierlogin.component';
import { VerifiersignupComponent } from './verifier/verifiersignup/verifiersignup.component';
import { VerifiertableComponent } from './verifier/verifiertable/verifiertable.component';
import { LoginpageComponent } from './issuer/loginpage/loginpage.component';
import { SignuppageComponent } from './issuer/signuppage/signuppage.component';
import { TablepageComponent } from './issuer/tablepage/tablepage.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminpageComponent } from './issuer/adminpage/adminpage.component';
import { SharecredspageComponent } from './verifier/sharecredspage/sharecredspage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HolderLoginComponent,
    HoldersignupComponent,
    HolderTablePageComponent,
    VerifierloginComponent,
    VerifiersignupComponent,
    VerifiertableComponent,
    LoginpageComponent,
    SignuppageComponent,
    TablepageComponent,
    HomeComponent,
    AdminpageComponent,
    SharecredspageComponent,
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
