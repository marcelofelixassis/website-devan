import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//components
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesComponent } from './components/features/features.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FeaturesComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
