import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';
import { PrintersViewComponent } from './views/printers/printers.component';

@NgModule({
  declarations: [
    LoginViewComponent,
    HomeViewComponent,
    CatalogViewComponent,
    PrintersViewComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: 'printers', component: PrintersViewComponent },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
