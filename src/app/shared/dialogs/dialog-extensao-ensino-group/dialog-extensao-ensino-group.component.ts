import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagePathComplement } from "@app/shared/pipes/image-path-complement.pipe";

@Component({
  selector: 'app-dialog-extensao-ensino-group',
  templateUrl: './dialog-extensao-ensino-group.component.html',
  styleUrls: ['./dialog-extensao-ensino-group.component.scss']
})
export class DialogExtensaoEnsinoGroupComponent {

  public grupoForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogExtensaoEnsinoGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { form: any },
    private pipeImage: ImagePathComplement
  ) {
    this.grupoForm = this.createForm();

    if (this.data.form != null) {
      this.fillForm(this.data.form);
    }

  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      title: [null, [Validators.required]],
      date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      coordination: [null, [Validators.required]],
      resume: [null, [Validators.required]],
      financing: [null, []],
      icEnsino: [null, [Validators.required]],
      researchLink: [null, []],
      link: [null, []],
      linkYoutube: [null, []]
    });
  }

  private fillForm(data: any): void {
    this.grupoForm.patchValue({
      title: data.title,
      date: data.date,
      type: data.type,
      coordination: data.coordination,
      resume: data.resume,
      financing: data.financing,
      icEnsino: data.icPesquisa,
      researchLink: data.researchLink,
      link: data.link,
      linkYoutube: data.linkYoutube
    })
  }



  public registerArticle(): void {
    if (this.grupoForm.valid) {
      const files = [];
      this.dialogRef.close({ save: true, form: this.grupoForm.value, files })
    }
  }

  public closeDialog(): void {

    this.dialogRef.close({ save: false });
  }



}
