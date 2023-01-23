import { NgModule } from "@angular/core";
import { ImagePathComplement } from "./image-path-complement.pipe";
import { TruncateStringPipe } from './truncate-string.pipe';
import { MaskCpfPipe } from './mask-cpf.pipe';
import { CepPipe } from './cep.pipe';

@NgModule({
  declarations: [
    ImagePathComplement,
    TruncateStringPipe,
    MaskCpfPipe,
    CepPipe
  ],
  exports: [
    ImagePathComplement,
    TruncateStringPipe,
    MaskCpfPipe,
    CepPipe
  ],
  providers: [
    ImagePathComplement,
    TruncateStringPipe,
    MaskCpfPipe,
    CepPipe
  ]
})
export class CustomPipesModule { }
