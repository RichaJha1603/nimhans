import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms'
import { MaterialModule } from './material/material.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {RouterModule, Routes} from "@angular/router";
import { ThirdComponent } from './third/third.component';
import { LoginComponent } from './login/login.component';
import { TransferUserService } from './TransferUserService';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';




const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'third', component: ThirdComponent, data: { title: 'Third Component' } },
  {path: 'breifView/:id',component:FourthComponentComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    LoginComponent,
    FourthComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],

  providers: [TransferUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
