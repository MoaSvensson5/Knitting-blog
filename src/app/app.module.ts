import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { HeaderComponent } from './components/header/header.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';
import { FormComponent } from './components/form/form.component';
import { ContactComponent } from './views/contact/contact.component';
import { ImageTextBlockComponent } from './components/image-text-block/image-text-block.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    CreatePostComponent,
    HeaderComponent,
    PostListComponent,
    PostDetailsComponent,
    FormComponent,
    ContactComponent,
    ImageTextBlockComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
