import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { chartsPartComponent } from './chartsPart/chartsPart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MiddlebarComponent } from './middlebar/middlebar.component';
import { SecondbarComponent } from './secondbar/secondbar.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    chartsPartComponent,
    MiddlebarComponent,
    SecondbarComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
