import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Input() currentNote: any;
  @Output() saveNote = new EventEmitter<any>();

  note: any = { id: '', title: '', content: '', timestamp: '' };

  ngOnInit(): void {
    if (this.currentNote) {
      this.note = { ...this.currentNote };
    }
  }

  onSubmit() {
    this.saveNote.emit(this.note);
    this.note = { id: '', title: '', content: '', timestamp: '' };
  }
}
