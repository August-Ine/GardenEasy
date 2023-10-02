import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuickEstimateComponent } from './pages/quick-estimate/quick-estimate.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quick-estimate/:serviceId', component: QuickEstimateComponent },
  { path: 'sign-up', component: UserFormComponent },
  { path: 'sign-in', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
