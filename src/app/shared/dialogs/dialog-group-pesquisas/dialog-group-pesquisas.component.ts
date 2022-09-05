import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagePathComplement } from "@app/shared/pipes/image-path-complement.pipe";

@Component({
  selector: "dialog-group-pesquisas-component",
  templateUrl: "./dialog-group-pesquisas.component.html",
  styleUrls: ["./dialog-group-pesquisas.component.scss"]
})
export class DialogGroupPesquisasComponent {

  public grupoForm: FormGroup;

  private participantToSend: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogGroupPesquisasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { grupo: any },
    private pipeImage: ImagePathComplement
  ) {
    this.grupoForm = this.createForm();

    if (this.data.grupo != null) {
      this.fillForm(this.data.grupo);
    }

  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      titleResearch: [null, [Validators.required]],
      resume: [null, [Validators.required]],
      coordination: [null, [Validators.required]],
      period: [null, [Validators.required]],
      financing: [null, [Validators.required]],
      publicationResearch: [null, [Validators.required]],
      researchLink: [null, [Validators.required]]
    });
  }

  private fillForm(data: any): void {


    this.grupoForm.patchValue({

      titleResearch: data.titleResearch,
      resume: data.resume,
      coordination: data.coordination,
      period: data.period,
      financing: data.financing,
      publicationResearch: data.publicationResearch,
      researchLink: data.researchLink

    })
  }



  public registerResearch(): void {
    if (this.grupoForm.valid) {
      const files = [];
      this.dialogRef.close({ save: true, grupo: this.grupoForm.value, files })
    }
  }

  public closeDialog(): void {

    this.dialogRef.close({ save: false });
  }



}
