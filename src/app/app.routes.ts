import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Usuarios2Component } from './pages/usuarios2/usuarios2.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'usuarios', component:Usuarios2Component},
    {path:'**', component:Error404Component}
];
