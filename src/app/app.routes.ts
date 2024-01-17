import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./auth/login/login.component'),
      },
      {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('./auth/register/register.component'),
      },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'product',
    children: [
      {
        path: 'list',
        title: 'Product List',
        loadComponent: () =>
          import('./product/product-list/product-list.component'),
      },
      {
        path: 'create',
        title: 'Product Create',
        loadComponent: () =>
          import('./product/product-create/product-create.component'),
      },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'category',
    children: [
      {
        path: 'list',
        title: 'Category List',
        loadComponent: () =>
          import('./category/category-list/category-list.component'),
      },
      {
        path: 'create',
        title: 'Category Create',
        loadComponent: () =>
          import('./category/category-create/category-create.component'),
      },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'upload',
    title: 'File Upload',
    loadComponent: () => import('./file-upload/file-upload.component'),
  },
  {
    path: '**',
    redirectTo: '/product',
    pathMatch: 'full',
  },
];
