import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ContactComponent } from './views/contact/contact.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { HeaderComponent } from './components/header/header.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    CreatePostComponent,
    HeaderComponent,
    NewPostComponent,
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
