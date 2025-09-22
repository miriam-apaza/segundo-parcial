import { Routes } from '@angular/router';
import { Layaut } from './layaut/layaut';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    {
        path:'',
        component:Layaut,
        children:[
            {
            path:'',
            component:Home,
            title:'Inicio'
            },

            {
            path:'about',
            component:About,
            title:'Acerca de'
            }
            
        ]
    }
];

