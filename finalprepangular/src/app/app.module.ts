import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DomSanitizer} from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CollegesComponent } from './colleges/colleges.component';
import { BlogComponent } from './blog/blog.component';
import { IpuConnectComponent } from './ipu-connect/ipu-connect.component';
import { NotesComponent } from './notes/notes.component';
import { BtechComponent } from './notes/children/btech/btech.component';
import { BbaComponent } from './notes/children/bba/bba.component';
import { MbaComponent } from './notes/children/mba/mba.component';
import { CseComponent } from './notes/children/btech/cse/cse.component';
import { ItComponent } from './notes/children/btech/it/it.component';
import { EeeComponent } from './notes/children/btech/eee/eee.component';
import { EceComponent } from './notes/children/btech/ece/ece.component';
import { ResultComponent } from './result/result.component';
import { RBtechComponent } from './result/children/btech/btech.component';
import { RBbaComponent } from './result/children/bba/bba.component';
import { RMbaComponent } from './result/children/mba/mba.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'colleges', component: CollegesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'ipu-connect', component: IpuConnectComponent },
  { path: 'results', component: ResultComponent,
    children: [
      {path: 'BTech', component:RBtechComponent},
      {path: 'Mba', component:RMbaComponent},
      {path: 'Bba', component:RBbaComponent},
      { path: '',
        redirectTo: '/results',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'notes', component: NotesComponent,
      children: [
        { path: 'btech', component: BtechComponent,
          children: [
            {path: 'cse', component:CseComponent},
            {path: 'ece', component:EceComponent},
            {path: 'eee', component:EeeComponent},
            {path: 'It', component:ItComponent},
            { path: '',
              redirectTo: '/notes/btech',
              pathMatch: 'full'
            },
          ]
        },
        {path: 'bba', component:BbaComponent},
        {path: 'mba', component:MbaComponent},
        { path: '',
          redirectTo: '/notes',
          pathMatch: 'full'
        },
      ]
    },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    CollegesComponent,
    BlogComponent,
    IpuConnectComponent,
    NotesComponent,
    BtechComponent,
    BbaComponent,
    MbaComponent,
    CseComponent,
    ItComponent,
    EeeComponent,
    EceComponent,
    ResultComponent,
    RBtechComponent,
    RBbaComponent,
    RMbaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  HttpModule,
  RouterModule.forRoot(
    appRoutes,
    // { enableTracing: true },
    { useHash: true }
  ),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
