import { NgModule } from "@angular/core";
import { ImagePathComplement } from "./image-path-complement.pipe";
import { TruncateStringPipe } from './truncate-string.pipe';

@NgModule({
  declarations: [
    ImagePathComplement,
    TruncateStringPipe
  ],
  exports: [
    ImagePathComplement,
    TruncateStringPipe
  ],
  providers: [
    ImagePathComplement,
    TruncateStringPipe
  ]
})
export class CustomPipesModule { }
