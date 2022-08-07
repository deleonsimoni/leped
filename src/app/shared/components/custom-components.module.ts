import { NgModule } from "@angular/core";
import { CustomPipesModule } from "../pipes/custom-pipes.module";
import { CoordinatorCardComponent } from "./coordinator-card/coordinator-card.component";

@NgModule({
  declarations: [
    CoordinatorCardComponent
  ],
  exports: [
    CoordinatorCardComponent,
    CustomPipesModule
  ]
})
export class CustomComponentsModule {}
