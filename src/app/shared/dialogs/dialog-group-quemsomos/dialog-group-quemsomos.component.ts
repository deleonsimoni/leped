import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagePathComplement } from "@app/shared/pipes/image-path-complement.pipe";

@Component({
  selector: "dialog-group-quemsomos-component",
  templateUrl: "./dialog-group-quemsomos.component.html",
  styleUrls: ["./dialog-group-quemsomos.component.scss"]
})
export class DialogGroupQuemsomosComponent {

  public grupoForm: FormGroup;
  public logo: any;
  public logo2: any;
  public imagePathS3: File = null;

  public participantImage: any[] = [
    { base64: null }
  ];


  private participantToSend: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogGroupQuemsomosComponent>,
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
      quemsomosDesc: [null, [Validators.required]],
      participantImage: [null],
      participantName: [null, [Validators.required]],
      participantLattes: [null, [Validators.required]]
    });
  }

  private fillForm(data: any): void {
    this.logo = this.pipeImage.transform(data.imagePathS3);
    this.logo2 = this.pipeImage.transform(data.coordenadoraImage);

    data.participantImage.forEach((el: any) => {
      this.participantImage.push({ base64: this.pipeImage.transform(el) })
    });

    this.grupoForm.patchValue({
      quemsomosDesc: data.quemsomosDesc,
      participantImage: data.participantImage,
      participantName: data.participantName,
      participantLattes: data.participantLattes

    })
  }

  public getProfileImageCode(event: any, index?: number): void {
    const that = this;
    const FR = new FileReader();
    const files: Array<any> = event.target.files;

    FR.addEventListener("load", function (e) {
      if (index) {
        that[`logo${index}`] = e.target.result;
      } else {
        that.logo = e.target.result;
      }
    });

    if (files.length > 0) {
      if (index) {
        that.participantImage = files[0];
      } else {
        that.imagePathS3 = files[0];
      }

      FR.readAsDataURL(files[0]);
    } else {
      that.logo = null;
      that.logo2 = null;
      that.imagePathS3 = null;
    }
  }

  setParticipantImage(event: any, index: number) {
    const that = this;
    const FR = new FileReader();
    const files = event.target.files;

    FR.addEventListener("load", function (e) {
      if (index == 0) {
        that.participantImage.push({ base64: e.target.result });
        that.participantToSend.push(files[0]);
      } else {
        that.participantImage[index]["base64"] = e.target.result;
        that.participantToSend[index] = files[0];
      }
    });

    if (files.length > 0) {
      FR.readAsDataURL(files[0]);
    }
  }

  public registerQuemsomos(): void {
    if (this.grupoForm.valid) {
      const files = [];
      files.push(this.imagePathS3);
      files.push(this.participantToSend);

      let galeria: any[] = [];
      this.participantImage.splice(1)
        .forEach(el => {
          if (el.base64.includes("leped.s3")) {
            galeria.push("images/" + el.base64.replace(/.+images\//, ""));
          }
        });

      this.grupoForm.patchValue({ galeria });
      this.dialogRef.close({ save: true, grupo: this.grupoForm.value, files })
    }
  }

  public closeDialog(): void {
    this.participantImage = [];
    this.dialogRef.close({ save: false });
  }

  public deleteImage(index: number) {
    this.participantImage.splice(index, 1);

    if (this.participantToSend && this.participantToSend.length > 0) {
      this.participantToSend.splice(index, 1);
    }
  }

  public deleteImagePart(index: number) {
    this.participantImage.splice(index, 1);

    if (this.participantToSend && this.participantToSend.length > 0) {
      this.participantToSend.splice(index, 1);
    }
  }
}
