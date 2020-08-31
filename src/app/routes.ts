import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControlStationListComponent } from './control-station-list/control-station-list.component';
import { StationItemListComponent } from './station-item-list/station-item-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'control-stations', component: ControlStationListComponent },
            { path: 'station-items', component: StationItemListComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
