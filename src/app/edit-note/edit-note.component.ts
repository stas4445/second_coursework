import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  // note!: Note;
  note!: Note | undefined;
  
  constructor(   private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        const idParam = paramMap.get('id')! 
        this.note = this.noteService.getNote(idParam)
      })
    }

  onFormSubmit(form: NgForm) {
    // this.noteService.updateNote(this.note.id, form.value)
    const id = this.note ? this.note.id : '';
    this.noteService.updateNote(id, form.value);
    this.router.navigateByUrl("/notes")
  }

  deleteNote() {
    const id = this.note ? this.note.id : '';
    this.noteService.deleteNote(id)
    // this.noteService.deleteNote(this.note.id)
    this.router.navigateByUrl("/notes")
  }
}
