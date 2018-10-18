import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ArticleComponent } from './components/content/article/article.component';
import { AsideComponent } from './components/content/aside/aside.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CountriesComponent } from './components/countries/countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesService } from '../shared/courses.service';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { CountriesService } from '../shared/countries.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../shared/auth-guard.service';
import { AuthService } from '../shared/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CountryReadComponent } from './components/country-read/country-read.component';
@NgModule({
    imports: [CommonModule, SystemRoutingModule, HttpModule, ReactiveFormsModule, FormsModule],
    declarations: [SystemComponent, LoginComponent, HomeComponent, HeaderComponent,
        FooterComponent, ContentComponent, ArticleComponent, AsideComponent,
        CoursesComponent, CountriesComponent, NotFoundComponent, CoursesDetailsComponent, CreateUpdateComponent, DeleteComponent, CountryReadComponent],
    providers: [CoursesService, CountriesService, AuthGuardService, AuthService]
})
export class SystemModule {

}