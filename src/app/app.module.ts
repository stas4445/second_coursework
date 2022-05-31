import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { TasksComponent } from './tasks/tasks.component';
import { MomentPipe } from './shared/moment.pipe';
import { MomentsPipe } from './shared/moments.pipe';
import { BoardsComponent } from './boards/boards.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { DotsComponent } from './dots/dots.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TodosComponent,
    NotesComponent,
    CalendarComponent,
    SelectorComponent,
    TasksComponent,
    MomentPipe,
    MomentsPipe,
    BoardsComponent,
    TodoItemComponent,
    AddNoteComponent,
    NoteItemComponent,
    EditNoteComponent,
    DotsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
