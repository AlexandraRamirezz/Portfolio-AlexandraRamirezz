import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './layouts/core/components/navbar/navbar.component';
import { FooterComponent } from './layouts/core/components/footer/footer.component';
import { ScreenComponent } from './layouts/screen/pages/screen.component';
import { HeroSectionComponent } from './layouts/screen/components/hero-section/hero-section.component';
import { AboutMeComponent } from './layouts/screen/components/about-me/about-me.component';
import { SkillsComponent } from './layouts/screen/components/skills/skills.component';
import { ProjectsComponent } from './layouts/screen/components/projects/projects.component';
import { DesignsComponent } from './layouts/screen/components/designs/designs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScreenComponent,
    HeroSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    DesignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
