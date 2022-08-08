import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomComponentsModule } from "../components/custom-components.module";
import { CustomPipesModule } from "../pipes/custom-pipes.module";
import { DialogRegisterCoordinatorComponent } from "./dialog-register-coordinator/dialog-register-coordinator.component";
import { DialogNewsComponent } from './dialog-news/dialog-news.component';
import { DialogEventsComponent } from './dialog-events/dialog-events.component';
import { AngularEditorModule } from "@kolkov/angular-editor";

@NgModule({
  declarations: [
    DialogRegisterCoordinatorComponent,
    DialogNewsComponent,
    DialogEventsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
    AngularEditorModule,
    CustomComponentsModule
  ],
  exports: [
    DialogRegisterCoordinatorComponent
  ]
})
export class CustomDialogsModule { }
