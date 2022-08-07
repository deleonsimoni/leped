import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imagePathComplement"
})
export class ImagePathComplement implements PipeTransform {

  transform(value: any, ...args: any[]) {
    if (typeof value == "string") {
      return 'data:image/png;base64,'.concat(value)
    }
  }

}
