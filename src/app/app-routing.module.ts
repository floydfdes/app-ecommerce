import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { BlogComponent } from './core/components/blog/blog.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactUsComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./core/modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./core/modules/home/home.module').then((m) => m.HomeModule),
  },
  { path: '*', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
