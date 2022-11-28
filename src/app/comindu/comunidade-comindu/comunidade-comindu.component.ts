import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-comunidade-comindu',
  templateUrl: './comunidade-comindu.component.html',
  styleUrls: ['./comunidade-comindu.component.scss']
})
export class ComunidadeCominduComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }






















  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,

    width: '800px',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    sanitize: true,
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['insertVideo']
    ]
  };

}
