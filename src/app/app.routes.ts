import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { NewModelComponent } from './new-model/new-model.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ModelManagerComponent } from './model-manager/model-manager.component';


export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-logged', component: HomeLoggedComponent },
  { path: 'new-model', component: NewModelComponent },
  { path: 'details/:id', component: EditUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'model-manager', component: ModelManagerComponent },
];