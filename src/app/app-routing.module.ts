import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard, AuthResolve } from './shared/auth';

const routes: Routes = [
    { 
        path: '', 
        component: RootComponent,
        canActivate: [AuthGuard],
        children: [
            { path:'', component: HomeComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //otherwise redirect to home.
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class Angular2RoutingModule { }
