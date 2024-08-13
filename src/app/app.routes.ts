import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { HomecComponent } from './homec/homec.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'create',
        component: CreateComponent 
    },
    {
        path:'',
        component: HomeComponent 
    },
    {
        path:'columns',
        component: HomecComponent 
    },
    {
        path:'columns/create',
        component: CreateComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
