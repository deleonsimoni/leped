import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagePathComplement } from "@app/shared/pipes/image-path-complement.pipe";

@Component({
  selector: "dialog-group-teses-component",
  templateUrl: "./dialog-group-teses.component.html",
  styleUrls: ["./dialog-group-teses.component.scss"]
})
export class DialogGroupTesesComponent {

  public grupoForm: FormGroup;

  private participantToSend: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogGroupTesesComponent>,
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
      titleTesis: [null, [Validators.required]],
      authorTesis: [null, [Validators.required]],
      dateTesis: [null, [Validators.required]],
      linkTesis: [null, [Validators.required]]

    });
  }

  private fillForm(data: any): void {


    this.grupoForm.patchValue({

      titleTesis: data.titleTesis,
      resume: data.resume,
      authorTesis: data.authorTesis,
      dateTesis: data.dateTesis,
      linkTesis: data.linkTesis

    })
  }



  public registerTesis(): void {
    if (this.grupoForm.valid) {
      const files = [];
      this.dialogRef.close({ save: true, grupo: this.grupoForm.value, files })
    }
  }

  public closeDialog(): void {

    this.dialogRef.close({ save: false });
  }



}
