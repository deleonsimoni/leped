import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomComponentsModule } from "../components/custom-components.module";
import { CustomPipesModule } from "../pipes/custom-pipes.module";
import { DialogRegisterCoordinatorComponent } from "./dialog-register-coordinator/dialog-register-coordinator.component";

@NgModule({
  declarations: [
    DialogRegisterCoordinatorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
    CustomComponentsModule
  ],
  exports: [
    DialogRegisterCoordinatorComponent
  ]
})
export class CustomDialogsModule {}
