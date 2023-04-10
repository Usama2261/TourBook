import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from 'src/app/features/register-user/register-user.component';
import { RegisterUserRoutingModule } from 'src/app/features/register-user/register-user.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    AppCommonModule,
    FormsModule
  ],
  declarations: [RegisterUserComponent]
})
export class RegisterUserModule { }