import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';

import {DashboardComponent } from '././dashboard.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }