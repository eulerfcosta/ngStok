import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
