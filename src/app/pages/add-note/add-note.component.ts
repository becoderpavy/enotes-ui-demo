import { Component, inject, Inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponse } from '../../model/ApiResponse';
import { ICategory } from '../../model/Category';
import { Notes } from '../../model/Notes';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-add-note',
  imports: [FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent implements OnInit {
  ngOnInit(): void {
    this.getActiveCategory();
  }

  noteObj: Notes = new Notes();
  masterService = inject(MasterService);
  noteService = inject(NoteService);
  categoryList: ICategory[] = [];

  getActiveCategory() {
    this.masterService.getCategory().subscribe((res: ApiResponse) => {
      this.categoryList = res.data;
    });
  }

  saveNotes() {
    console.log(this.noteObj);
    this.noteService.saveNotes(this.noteObj).subscribe((res: ApiResponse) => {
      if (res.status == 'sucess') {
        alert('saved success');
      }
    });
  }
}
