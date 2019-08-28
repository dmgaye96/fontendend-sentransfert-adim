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
import { AddpartenaireComponent } from './addpartenaire/addpartenaire.component';


const routes: Routes = [

  { path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  { path: 'forms', canActivate: [AuthGuardService], component: FormsComponent},
  { path: 'tables',canActivate: [AuthGuardService] , component: TablesComponent},
  { path: 'typography', canActivate: [AuthGuardService], component: TypographyComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'notifications', canActivate: [AuthGuardService], component: NotificationsComponent},
  { path: 'auth/signup',  component:  SignupComponent },
  { path: 'auth/signin', component:  SigninComponent},
  { path: 'depot' ,canActivate: [AuthGuardService], component: DepotComponent },
  { path: 'register', canActivate: [AuthGuardService], component : RegisterComponent },
  { path: 'envoi', canActivate: [AuthGuardService],component : EnvoiComponent},
  { path: 'retrait' , canActivate: [AuthGuardService], component : RetraitComponent},
  { path: 'adduser' , canActivate: [AuthGuardService], component : AdduserComponent},
  { path: 'addpartenaire' , canActivate: [AuthGuardService],component:AddpartenaireComponent},
  { path: '**' ,component: SigninComponent},
  { path: '',  component: SigninComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
