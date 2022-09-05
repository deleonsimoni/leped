import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagePathComplement } from "@app/shared/pipes/image-path-complement.pipe";

@Component({
  selector: "dialog-group-livros-component",
  templateUrl: "./dialog-group-livros.component.html",
  styleUrls: ["./dialog-group-livros.component.scss"]
})
export class DialogGroupLivrosComponent {

  public grupoForm: FormGroup;
  public logo: any;
  public logo2: any;
  public imagePathS3: File = null;

  public imageBook: any[] = [
    { base64: null }
  ];


  private BookToSend: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogGroupLivrosComponent>,
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
      titleBook: [null, [Validators.required]],
      authorsBook: [null],
      linkBook: [null, [Validators.required]],
      imageBook: [null, [Validators.required]]
    });
  }

  private fillForm(data: any): void {
    this.logo = this.pipeImage.transform(data.imagePathS3);
    this.logo2 = this.pipeImage.transform(data.coordenadoraImage);

    data.participantImage.forEach((el: any) => {
      this.imageBook.push({ base64: this.pipeImage.transform(el) })
    });

    this.grupoForm.patchValue({
      titleBook: data.titleBook,
      authorsBook: data.authorsBook,
      linkBook: data.linkBook,
      imageBook: data.imageBook

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
        that.imageBook = files[0];
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
        that.imageBook.push({ base64: e.target.result });
        that.BookToSend.push(files[0]);
      } else {
        that.imageBook[index]["base64"] = e.target.result;
        that.BookToSend[index] = files[0];
      }
    });

    if (files.length > 0) {
      FR.readAsDataURL(files[0]);
    }
  }

  public registerBook(): void {
    if (this.grupoForm.valid) {
      const files = [];
      files.push(this.imagePathS3);
      files.push(this.BookToSend);

      let galeria: any[] = [];
      this.imageBook.splice(1)
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
    this.imageBook = [];
    this.dialogRef.close({ save: false });
  }

  public deleteImage(index: number) {
    this.imageBook.splice(index, 1);

    if (this.BookToSend && this.BookToSend.length > 0) {
      this.BookToSend.splice(index, 1);
    }
  }

  public deleteImagePart(index: number) {
    this.imageBook.splice(index, 1);

    if (this.BookToSend && this.BookToSend.length > 0) {
      this.BookToSend.splice(index, 1);
    }
  }
}
