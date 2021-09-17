import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { ModelManagerComponent } from './model-manager/model-manager.component';
import { NewModelComponent } from './new-model/new-model.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditUserComponent,
    HomeLoggedComponent,
    ModelManagerComponent,
    NewModelComponent,
    RegisterComponent,
    UserComponent,
    UserNavComponent,
    AvatarDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
