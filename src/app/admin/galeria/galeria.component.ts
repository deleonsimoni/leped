import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImagePathComplement } from '@app/shared/pipes/image-path-complement.pipe';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  public grupoForm: FormGroup;
  public gallery: any[] = [
    { base64: null }
  ];
  private galleryToSend: any = [];


  constructor(
    private formBuilder: FormBuilder,
    private pipeImage: ImagePathComplement
  ) {
    this.grupoForm = this.createForm();
  }

  ngOnInit(): void {
  }


  private createForm(): FormGroup {
    return this.formBuilder.group({
      galeria: [null]
    });
  }

  private fillForm(data: any): void {
    data.galeria.forEach((el: any) => {
      this.gallery.push({ base64: this.pipeImage.transform(el) })
    });

    this.grupoForm.patchValue({

      galeria: data.galeria
    })
  }


  setGalleryImage(event: any, index: number) {
    const that = this;
    const FR = new FileReader();
    const files = event.target.files;

    FR.addEventListener("load", function (e) {
      if (index == 0) {
        that.gallery.push({ base64: e.target.result });
        that.galleryToSend.push(files[0]);
      } else {
        that.gallery[index]["base64"] = e.target.result;
        that.galleryToSend[index] = files[0];
      }
    });

    if (files.length > 0) {
      FR.readAsDataURL(files[0]);
    }
  }

  public deleteImage(index: number) {
    this.gallery.splice(index, 1);

    if (this.galleryToSend && this.galleryToSend.length > 0) {
      this.galleryToSend.splice(index, 1);
    }
  }

}
