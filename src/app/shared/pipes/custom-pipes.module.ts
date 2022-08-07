import { NgModule } from "@angular/core";
import { ImagePathComplement } from "./image-path-complement.pipe";

@NgModule({
  declarations: [
    ImagePathComplement
  ],
  exports: [
    ImagePathComplement
  ]
})
export class CustomPipesModule {}
