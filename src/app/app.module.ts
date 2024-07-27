import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import

import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add this import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
