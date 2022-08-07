import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Coordenadora } from "@app/shared/types";

@Component({
  selector: "dialog-register-coordinator-component",
  templateUrl: "./dialog-register-coordinator.component.html",
  styleUrls: ["./dialog-register-coordinator.component.scss"]
})
export class DialogRegisterCoordinatorComponent {

  public coordenadoraForm: FormGroup;
  public logo: string;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogRegisterCoordinatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { coordenador: Coordenadora}
  ) {
    this.coordenadoraForm = this.createForm();

    if (this.data.coordenador != null) {
      this.fillForm(this.data.coordenador);
    }
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      group: [null, [Validators.required]],
      email: [null, [Validators.required]],
      logo: [null, [Validators.required]],
      orcid: [null, [Validators.required]],
      lattes: [null, [Validators.required]],
      instagram: [null, [Validators.required]],
      twitter: [null, [Validators.required]],
      facebook: [null, [Validators.required]]
    });
  }

  private fillForm(data: Coordenadora): void {
    this.logo = data.logo;

    this.coordenadoraForm.patchValue({
      name: data.name,
      group: data.group,
      email: data.email,
      logo: data.logo,
      orcid: data.orcid,
      lattes: data.lattes,
      instagram: data.instagram,
      twitter: data.twitter,
      facebook: data.facebook
    })
  }

  public getProfileImageCode(event: any): void {
    const that = this;
    const FR = new FileReader();
    const files = event.target.files;

    FR.addEventListener("load", function(data) {
      const result = data.target.result as string;
      that.logo = result.split(",")[1] as string;

      that.coordenadoraForm.patchValue({ logo: that.logo })
    });

    if (files && files[0]) {
      FR.readAsDataURL(files[0]);
    } else {
      that.logo = null;
      that.coordenadoraForm.patchValue({ logo: null })
    }
  }

  public setProfileImage() {
    const click = new Event("click");

    document.querySelector("#logo")
      .dispatchEvent(click);
  }

  public registerCoordinator(): void {
    if (this.coordenadoraForm.valid) {
      this.dialogRef.close({ save: true, coordenador: this.coordenadoraForm.value })
    }
  }

  public closeDialog(): void {
    this.dialogRef.close({ save: false });
  }
}
