import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input() notes !: any[];
  @Output() editNote = new EventEmitter<any>();
  @Output() deleteNote = new EventEmitter<string>();

  currentPage = 1;
  notesPerPage = 10;
  searchTerm = '';

  filteredNotes() {
    return this.notes
      .filter(note => 
        note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        note.content.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .slice((this.currentPage - 1) * this.notesPerPage, this.currentPage * this.notesPerPage);
  }

  pages() {
    return Array(Math.ceil(this.notes.length / this.notesPerPage)).fill(0).map((_, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
  }
}
