import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './shared/nav/nav.component';
import { ButtonComponent } from './shared/button/button.component';
import { CardComponent } from './shared/card/card.component';
import { CardAlternateComponent } from './shared/card-alternate/card-alternate.component';
import { InputFieldComponent } from './shared/input-field/input-field.component';
import { QuickEstimateComponent } from './pages/quick-estimate/quick-estimate.component';
import { QuickEstimateServiceCardComponent } from './components/quick-estimate-service-card/quick-estimate-service-card.component';
import { PricingCardComponent } from './shared/pricing-card/pricing-card.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ButtonComponent,
    CardComponent,
    CardAlternateComponent,
    InputFieldComponent,
    QuickEstimateComponent,
    QuickEstimateServiceCardComponent,
    PricingCardComponent,
    UserFormComponent,
    ObjectKeysPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
