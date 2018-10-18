import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
const appRoutes: Routes = [
    {path: '', redirectTo: 'system', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
// error for routes failed
}