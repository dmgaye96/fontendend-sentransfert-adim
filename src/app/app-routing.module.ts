import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RetraitComponent } from './retrait/retrait.component';


const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'typography', component: TypographyComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'auth/signup', component:  SignupComponent },
  { path: 'auth/signin', component:  SigninComponent},
  { path: 'depot' , component: DepotComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'envoi', component : EnvoiComponent},
  { path: 'retrait' , component : RetraitComponent},
  { path: 'adduser' , component : AdduserComponent},
  { path: '**' , redirectTo : 'auth/signin'},
  { path: '',   redirectTo: 'auth/signin', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
