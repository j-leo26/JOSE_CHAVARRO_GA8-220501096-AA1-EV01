import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyViewComponent } from './components/my-view/my-view.component';
import { MyView2Component } from './components/my-view2/my-view2.component';
import { MyView3Component } from './components/my-view3/my-view3.component';
import { MyView4Component } from './components/my-view4/my-view4.component';

@NgModule({
  declarations: [
    AppComponent,
    MyViewComponent,
    MyView2Component,
    MyView3Component,
    MyView4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
