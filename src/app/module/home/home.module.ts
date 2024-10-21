import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HeaderComponent,
    DashboradComponent,
    HomeComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatRippleModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIcon,
    FontAwesomeModule,
    MatPaginator,
    MatFormFieldModule,
    MatTableModule

  ]
})
export class HomeModule { }
