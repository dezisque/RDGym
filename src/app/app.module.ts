import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

import { RouterModule, Routes } from '@angular/router';
import { MembershipComponent } from './membership/membership.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    MembershipComponent,
    TrainersComponent,
    ContactsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
