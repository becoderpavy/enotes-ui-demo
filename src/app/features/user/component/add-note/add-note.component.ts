import { Component, inject, Inject, OnInit } from '@angular/core';

import { ApiResponse } from '../../../../models/ApiResponse';
import { ICategory } from '../../../../models/Category';
import { Notes } from '../../../../models/Notes';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MasterService } from '../../../../core/services/master.service';
import { NoteService } from '../../../../core/services/note.service';

@Component({
  selector: 'app-add-note',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
})
export class AddNoteComponent implements OnInit {
  ngOnInit(): void {
    this.getActiveCategory();
  }

  fb = inject(FormBuilder);
  masterService = inject(MasterService);
  noteService = inject(NoteService);
  categoryList: ICategory[] = [];
  selectedFile: File | null = null;

  getActiveCategory() {
    this.masterService.getCategory().subscribe((res: ApiResponse) => {
      this.categoryList = res.data;
    });
  }
  // Fetch Data from form
  noteForm = this.fb.group({
    id: [null],
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: [null, Validators.required],
    file: ['', Validators.required],
  });

  onFileChange(event: any) {
    const file = event.currentTarget.files[0];
    this.selectedFile = file;
    if (file) {
      this.noteForm.get('file')?.setValue('valid');
      this.noteForm.get('file')?.markAsTouched();
    }
  }

  saveNotes() {
    console.log(this.noteForm);
    const notes = this.buildNoteFromForm();
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
    formData.append('notes', JSON.stringify(notes));
    this.noteService.saveNotes(formData).subscribe({
      next: (res) => alert('Note added success'),
      error: (error) => {
        console.log(error);
      },
    });
  }

  buildNoteFromForm(): Notes {
    const formValue = this.noteForm.value as {
      id?: number | null;
      title: string | null;
      description: string | null;
      category: number | null;
    };

    const note: Notes = {
      id: formValue.id ?? null,
      title: formValue.title!,
      description: formValue.description!,
      category: {
        id: formValue.category!,
      },
    };

    return note;
  }
}
