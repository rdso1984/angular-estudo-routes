import { Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

export const routes: Routes = [
    {path:'', component: TitleComponent, pathMatch:'full'},
    {path:'portfolio/:id', component: CardComponent, pathMatch:'prefix'},
    {path:'**', redirectTo: ''}
];
