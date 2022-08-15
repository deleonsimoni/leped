import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { CustomComponentsModule } from "../components/custom-components.module";
import { CustomPipesModule } from "../pipes/custom-pipes.module";

import { DialogEventsComponent } from "./dialog-events/dialog-events.component";
import { DialogNewsComponent } from "./dialog-news/dialog-news.component";
import { DialogRegisterCoordinatorComponent } from "./dialog-register-coordinator/dialog-register-coordinator.component";
import { DialogResearchGroupComponent } from "./dialog-research-group/dialog-research-group.component";

@NgModule({
  declarations: [
    DialogRegisterCoordinatorComponent,
    DialogResearchGroupComponent,
    DialogNewsComponent,
    DialogEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
    CustomComponentsModule,
    AngularEditorModule
  ],
  exports: [
    DialogRegisterCoordinatorComponent,
    DialogResearchGroupComponent,
    DialogNewsComponent,
    DialogEventsComponent
  ]
})
export class CustomDialogsModule { }
