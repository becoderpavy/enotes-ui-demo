import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-notes',
  imports: [],
  templateUrl: './view-notes.component.html',
  styleUrl: './view-notes.component.css',
})
export class ViewNotesComponent implements OnInit {
  notes: string[] = [];

  ngOnInit(): void {}
}
