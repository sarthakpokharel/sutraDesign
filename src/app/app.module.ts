import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FormExampleComponent } from './form-example/form-example.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { EasyUIModule } from 'ng-easyui';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    HeaderComponent,
    TabsComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    DragScrollModule,
    EasyUIModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
