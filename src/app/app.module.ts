import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroupDirective, FormsModule, NgForm, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//   //   const isSubmitted = form && form.submitted;
//   //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   // }
// }
export class AppModule { 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();
}
