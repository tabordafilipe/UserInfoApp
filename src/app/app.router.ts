import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

export const router: Routes = [
    { path: 'users', component: UsersComponent},
    { path: '', redirectTo: '/users', pathMatch: 'full'},
    { path: 'posts', component: PostsComponent},
    { path: 'posts/:id', component: PostsComponent },
    { path: 'photos', component: PhotosComponent},
    { path: 'photos/:id', component: PhotosComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

export const appRoutingProviders: any[] = [

];  
export const routing = RouterModule.forRoot(router);
