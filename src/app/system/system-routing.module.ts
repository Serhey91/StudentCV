import { NgModule } from '@angular/core';
import { SystemComponent } from './system.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CountriesComponent } from './components/countries/countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CountryReadComponent } from './components/country-read/country-read.component';
const systemRoutes: Routes = [
    {
        path: 'system', component: SystemComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'courses/:id', component: CoursesDetailsComponent },
            { path: 'countries', component: CountriesComponent },
            { path: 'country/create', canActivate: [AuthGuardService], component: CreateUpdateComponent },
            { path: 'country/update/:id', canActivate: [AuthGuardService], component: CreateUpdateComponent },
            { path: 'country/delete/:id', canActivate: [AuthGuardService], component: DeleteComponent },
            { path: 'country/read/:id', component: CountryReadComponent },
            { path: 'login', component: LoginComponent }
        ]
    },
    { path: 'error', component: NotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forChild(systemRoutes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
    constructor(private router: Router) {
        this.router.errorHandler = (error: any) => {
            this.router.navigate(['/error']);
        }
    }
}