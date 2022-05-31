import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { DotsComponent } from './dots/dots.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', component: DotsComponent },
  { path: 'todos', component: TodosComponent, data: { animation: 'isLeft'} }, 
  { path: 'notes', component: NotesComponent, data: { animation: 'isRigth'} },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
