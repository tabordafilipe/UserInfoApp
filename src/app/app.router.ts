import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

export const router: Routes = [
    { path: '', component: UsersComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/posts', component: PostsComponent},
    { path: 'users/photos', component: PhotosComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);