import { Component, inject, Inject, OnInit } from '@angular/core';

import { ApiResponse } from '../../../../models/ApiResponse';
import { ICategory } from '../../../../models/Category';
import { Notes } from '../../../../models/Notes';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../../../core/services/master.service';
import { NoteService } from '../../../../core/services/note.service';

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
    this.noteService.saveNotes(this.noteObj).subscribe({
      next: (res: any) => {
        if (res.status == 'sucess') {
          alert('saved success');
        }
      },
    });
  }
}
