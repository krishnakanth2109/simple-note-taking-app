import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: any[] = [];
  currentNote: any = null;

  ngOnInit() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }

  addOrEditNote(note: any) {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = note;
    } else {
      note.id = new Date().getTime().toString();
      note.timestamp = new Date().toLocaleString();
      this.notes.push(note);
    }
    this.saveNotes();
    this.currentNote = null;
  }

  editNote(note: any) {
    this.currentNote = note;
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
